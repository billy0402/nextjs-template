FROM node:20-alpine as base

# ========== Builder ==========

FROM base AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_API_URL=NEXT_PUBLIC_API_URL

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# ========== Runner ==========

FROM base AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/scripts/entrypoint.sh ./scripts/entrypoint.sh

USER nextjs

EXPOSE ${PORT}

RUN chmod +x /app/scripts/entrypoint.sh
ENTRYPOINT ["/app/scripts/entrypoint.sh"]

CMD ["node", "server.js"]
