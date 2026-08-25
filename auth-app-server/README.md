# Auth App Server

The server is a NestJS REST API for authentication and user management. It
uses Prisma with PostgreSQL, bcrypt for password hashing, and JWT tokens stored
in an httpOnly cookie named `token`.

## Features

- User registration with duplicate-email validation.
- Login with bcrypt password verification.
- JWT authentication cookie with a one-day lifetime.
- Logout that clears the authentication cookie.
- Password reset for an existing email address.
- User list and public user lookup endpoints.
- Global request validation with `class-validator`.
- Credentialed CORS support for the frontend.

## API Routes

- `POST /api/register`: create a user and set the token cookie.
- `POST /api/login`: authenticate a user and set the token cookie.
- `POST /api/logout`: clear the token cookie.
- `PUT /api/reset-password`: update a user's password.
- `GET /api/users`: list users.
- `GET /api/user/:id`: get a user's first name, last name, and email.

## Environment Variables

Create `auth-app-server/.env` before starting the server:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/auth_app?schema=public"
JWT_SECRET="replace-with-a-long-random-secret"
PORT=5000
NODE_ENV=development
```

`DATABASE_URL` is the PostgreSQL connection URL used by Prisma. Replace the
credentials and database name with your local PostgreSQL values. `JWT_SECRET`
signs authentication tokens and must be kept secret. `PORT` is optional and
defaults to `5000`; `NODE_ENV=production` enables secure production cookies.

Create the PostgreSQL database before running the migration. Never commit the
`.env` file or real credentials.

## Run Locally

From this directory:

```bash
npm install
npx prisma migrate dev
npm run start:dev
```

The API runs at [http://localhost:5000](http://localhost:5000). Start the
client separately from `auth-app-client`.

For a production-style server:

```bash
npm run build
npm run start:prod
```

## Production API

Production API: [https://internship-sprints-auth-app.vercel.app](https://internship-sprints-auth-app.vercel.app)

Configure `DATABASE_URL`, `JWT_SECRET`, `NODE_ENV=production`, and the
platform-provided `PORT` in the deployment. Apply committed Prisma migrations
with:

```bash
npx prisma migrate deploy
```
