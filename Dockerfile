# Base
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine as base

ENV NEXT_TELEMETRY_DISABLED=1


# Builder
FROM base AS builder

WORKDIR /app

ENV NEXT_PUBLIC_API_URL=NEXT_PUBLIC_API_URL

ARG NEXT_CONFIG=next.config.js

RUN \
    # Cache for npm
    --mount=type=cache,target=/root/.npm \
    \
    # Bind source code
    --mount=type=bind,source=.,target=.,readwrite \
    --mount=type=bind,source=${NEXT_CONFIG},target=./next.config.js \
    \
    # Install dependencies
    # - libc6-compat: https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
    apk add --no-cache libc6-compat && \
    \
    # Install node dependencies
    npm ci && \
    \
    # Build the app
    npm run build && \
    \
    # Move build result out bind mount
    cp -rv ./.next /srv/.next && \
    cp -rv ./public /srv/public && \
    cp -rv ./scripts /srv/scripts


# App
FROM base

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN \
    # Install dependencies
    # - curl: for healthcheck
    apk add curl && \
    \
    # Create user and group
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=builder --chown=nextjs:nodejs /srv/public ./public
COPY --from=builder --chown=nextjs:nodejs /srv/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /srv/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /srv/scripts ./scripts

EXPOSE ${PORT}

RUN chmod +x ./scripts/entrypoint.sh
ENTRYPOINT ["./scripts/entrypoint.sh"]

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
    CMD curl -fs http://localhost:3000 || exit 1

CMD HOSTNAME="0.0.0.0" node server.js
