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
- A Next.js proxy protects routes based on the `token` cookie:
	- Users with a token are redirected from `/`, `/register`, and
	  `/reset-password` to `/home`.
	- Users without a token are redirected from `/home` to `/`.
	- The proxy only runs for the routes listed in its `matcher` configuration.
	- The proxy checks whether the cookie exists; JWT validation is still handled
	  by the backend.

### Route Protection With the Proxy

The route protection logic is in `auth-app-client/proxy.ts`. Next.js runs this
function before requests to the routes in the `matcher` list. It reads the
`httpOnly` `token` cookie from the request, so client-side JavaScript does not
need direct access to the token.

The proxy uses two rules:

1. If a user already has a token and visits an authentication page, the user is
   redirected to `/home`.
2. If a user does not have a token and visits `/home`, the user is redirected
   to `/`.

After these checks, all other matched requests continue with
`NextResponse.next()`. To protect another route, add it to the `matcher` in
`auth-app-client/proxy.ts` and include the corresponding pathname in the proxy's
route checks.

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
