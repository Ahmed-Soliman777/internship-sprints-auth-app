# Auth App Client

The client is a Next.js frontend for the Auth App. It connects to the NestJS
backend through the API URL configured with `NEXT_PUBLIC_API_URL`.

## Register Page UI

The register page is available at `/register` and includes:

- First name and last name fields
- Email and password fields
- A **Submit** button with a loading state
- An **I already have an account** link back to the login page
- Responsive styling provided by Tailwind CSS

The page is implemented in `app/register/page.tsx`, with the form in
`components/RegisterFormComponent.tsx`.

## Frontend and Backend Connection

The register and login forms send JSON `POST` requests to the backend routes
`/api/register` and `/api/login`. Requests use `credentials: 'include'` so the
authentication cookie returned by the server is included in the browser session.

## Toast Notifications

`react-toastify` displays success and error messages for registration and login.
The shared `ToastContainer` is mounted in `app/layout.tsx` with a top-center
position, dark theme, hidden progress bar, and three-second auto-close time.

## Run Locally

From this folder, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
