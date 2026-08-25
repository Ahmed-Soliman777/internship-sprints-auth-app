# Auth App

This project contains a Next.js frontend and a NestJS backend for user
registration and authentication.

## New Features

### Client

- The register page is available at `/register`.
- The register form includes first name, last name, email, and password fields.
- The client sends register and login requests to the backend using the API URL
	configured by `NEXT_PUBLIC_API_URL`.
- Requests include credentials so the browser can receive and send the
	authentication cookie.
- `react-toastify` displays registration and login success or error messages.

### Server

- The register and login routes create JWT authentication tokens.
- Tokens are sent in an `httpOnly` cookie named `token` with a 24-hour lifetime.
- The logout route clears the token cookie.
- CORS is configured to allow credentialed requests from the client at
	`http://localhost:3000`.

## Run the Applications

Start the backend from `auth-app-server`:

```bash
npm install
npm run start:dev
```

Start the frontend from `auth-app-client`:

```bash
npm install
npm run dev
```

The client runs at `http://localhost:3000` and the server runs at
`http://localhost:5000`.
