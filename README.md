# ShipDenK Web Application

This is the ShipDenK web frontend, built as a single-page application.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local development

Prerequisites:

- Node.js and npm installed (for example via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

Steps:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available on the URL printed in the terminal (typically `http://localhost:5173`).

## Building for production

```sh
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deploying

You can deploy the contents of the `dist` folder to any static hosting provider (for example Vercel, Netlify, or similar). For Vercel, configure the framework as **Vite** and ensure all routes are rewritten to the SPA entry so client-side routing works for all paths.
