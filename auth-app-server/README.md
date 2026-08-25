# Auth App Server

The server is a NestJS backend for the Auth App. It provides authentication
routes and stores users through the Prisma database service.

## Authentication Token Cookie

The register and login endpoints create a JWT token after successful
authentication. The controller sends the token in a cookie named `token`.

- The cookie is `httpOnly`.
- The cookie expires after 24 hours.
- The logout endpoint clears the `token` cookie.

The server uses `cookie-parser` to read cookies and enables CORS credentials
for the frontend at `http://localhost:3000`.

## Authentication Routes

- `POST /api/register` creates a user and sets the token cookie.
- `POST /api/login` authenticates a user and sets the token cookie.
- `POST /api/logout` clears the token cookie.

## Run Locally

From this folder, install dependencies and start the server:

```bash
npm install
npm run start:dev
```

The server runs on `http://localhost:5000`.
