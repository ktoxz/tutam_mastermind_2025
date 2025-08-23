# mastermind_backend_2025

## Development

To start both frontend and backend in development mode:

```bash
pnpm dev
```

-   Frontend runs with `pnpm --filter fe dev`
-   Backend runs with `pnpm --filter be dev`

To start only frontend or backend in development:

```bash
pnpm dev:fe   # Frontend only
pnpm dev:be   # Backend only
```

## Production

To build frontend and start backend in production mode:

```bash
pnpm prod
```

-   Builds frontend with `pnpm --filter fe build`
-   Starts backend with `pnpm --filter be start`

To run only frontend or backend in production:

```bash
pnpm prod:fe  # Build frontend only
pnpm prod:be  # Start backend only
```
