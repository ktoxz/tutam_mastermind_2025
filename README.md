# tu-tam

## Thiết lập dự án

1. Cài đặt [pnpm](https://pnpm.io/):

    ```bash
    npm install -g pnpm
    ```

2. Cài đặt các package và build models:
    ```bash
    pnpm bootstrap
    ```

## Phát triển

Chạy cả frontend và backend ở chế độ phát triển:

```bash
pnpm dev
```

-   Frontend: `pnpm --filter fe dev`
-   Backend: `pnpm --filter be dev`

Chạy riêng frontend hoặc backend:

```bash
pnpm dev:fe   # Chỉ frontend
pnpm dev:be   # Chỉ backend
```

## Production

Build frontend và khởi động backend:

```bash
pnpm prod
```

-   Build frontend: `pnpm --filter fe build`
-   Start backend: `pnpm --filter be start`

Chạy riêng từng phần:

```bash
pnpm prod:fe  # Build frontend
pnpm prod:be  # Start backend
```
