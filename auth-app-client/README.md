# Auth App Client

The client is a Next.js frontend for the Auth App. It provides the user-facing
authentication flow and a protected dashboard.

## Features

- Login page at `/`.
- Registration page at `/register` with first name, last name, email, and
	password fields.
- Password reset page at `/reset-password`.
- Protected home page at `/home`.
- Next.js middleware protects `/home` and redirects authenticated users away
	from authentication pages.
- Loading states and `react-toastify` success and error notifications.
- Responsive styling with Tailwind CSS.

## API Connection

Set `NEXT_PUBLIC_API_URL` to the API deployment or local API URL. Requests use
same-origin `/api/*` paths and Next.js rewrites them to this value, allowing the
httpOnly authentication cookie to remain on the client domain.

Create `auth-app-client/.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=https://internship-sprints-auth-app.vercel.app
```

Production client: [https://internship-sprints-auth-app-qo63.vercel.app/](https://internship-sprints-auth-app-qo63.vercel.app/)

Production API: [https://internship-sprints-auth-app.vercel.app](https://internship-sprints-auth-app.vercel.app)

## Run Locally

The server must be running separately, or `NEXT_PUBLIC_API_URL` can point to the
deployed API as shown above.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

Do not commit `.env.local` or production credentials.
