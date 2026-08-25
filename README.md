# Auth App

Auth App is a full-stack authentication application with a Next.js client and
a NestJS API. Users can create an account, log in, log out, and reset their
password. Successful registration and login issue a JWT in an httpOnly cookie.

## Project Structure

- `auth-app-client`: Next.js frontend with responsive authentication pages and
  a protected home page.
- `auth-app-server`: NestJS REST API, Prisma data access, PostgreSQL, password
  hashing, and JWT cookie authentication.

## Features

### Client

- Login at `/`.
- Registration at `/register`.
- Password reset at `/reset-password`.
- Protected dashboard at `/home`.
- Client-side route protection through Next.js middleware.
- Loading states and toast notifications for authentication actions.
- API requests use credentials so the authentication cookie is retained.

### Server

- `POST /api/register` creates a user and sets a JWT cookie.
- `POST /api/login` authenticates a user and sets a JWT cookie.
- `POST /api/logout` clears the JWT cookie.
- `PUT /api/reset-password` changes a user's password.
- `GET /api/users` lists users.
- `GET /api/user/:id` returns a user's public profile fields.
- Prisma stores users in PostgreSQL and bcrypt hashes passwords.

## Deployed Applications

- Production client: [https://internship-sprints-auth-app-qo63.vercel.app/](https://internship-sprints-auth-app-qo63.vercel.app/)
- Production API: [https://internship-sprints-auth-app.vercel.app](https://internship-sprints-auth-app.vercel.app)

The client proxies `/api/*` requests to the API. This keeps the authentication
cookie on the client domain, which is required for the protected Next.js routes.

## Prerequisites

- Node.js 20 or newer
- npm
- PostgreSQL running locally, or an accessible PostgreSQL database

## Local Environment Setup

Create `auth-app-server/.env`:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/auth_app?schema=public"
JWT_SECRET="replace-with-a-long-random-secret"
PORT=5000
NODE_ENV=development
```

Replace the PostgreSQL connection details with your local values. Create the
`auth_app` database before running the migration.

Create `auth-app-client/.env.local`:

```env
NEXT_PUBLIC_API_URL=https://internship-sprints-auth-app.vercel.app
```

The client can use the deployed API while running locally. Do not commit either
environment file or real secrets.

## Run Locally

Open two terminals from the repository root.

Terminal 1, start the server:

```bash
cd auth-app-server
npm install
npx prisma migrate dev
npm run start:dev
```

Terminal 2, start the client:

```bash
cd auth-app-client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The local API runs at
[http://localhost:5000](http://localhost:5000).

## Production Environment

Configure `DATABASE_URL`, `JWT_SECRET`, `NODE_ENV=production`, and `PORT` in
the server deployment. Configure
`NEXT_PUBLIC_API_URL=https://internship-sprints-auth-app.vercel.app` in the
client deployment.
