# nextjs-template

## environment

- [macOS 12.7.5](https://www.apple.com/tw/macos/monterey/)
- [Visual Studio Code 1.85.1](https://code.visualstudio.com/)
- [nvm 0.39.7, node 20.10.0, npm 10.2.3](https://nodejs.org/en/)
- [Next.js 14.2.6](https://nextjs.org/)
- [React.js 18.3.1](https://react.dev/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

```shell
$ npm i -D
# or
$ npm install --save-dev
```

## Getting Started

Run the development server:

```bash
npm run dev
```

## Other scripts

```shell
# build the production version
$ npm run build

# run the production server
$ npm run start

# static code analysis
$ npm run lint

# fix lint problems
$ npm run lint:fix

# check coding style
$ npm run format

# format with coding style
$ npm run format:fix

# used by git pre-commit (husky)
# config file: .lintstagedrc.js
$ npm run lint-staged

# run testing
$ npm run test

# [Development] run testing with watch mode
$ npm run test:watch

# check testing coverage
$ npm run test:coverage
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build

```shell
$ docker build -t nextjs-template .
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
