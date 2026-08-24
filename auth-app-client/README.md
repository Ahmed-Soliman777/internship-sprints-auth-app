# Auth App Register Page UI

This Next.js client contains a simple register page for Auth App.

## Register Page UI Design

- The register page is available at `/register`.
- The page displays the heading **Get started on Applcation**.
- The form includes fields for first name, last name, email, and password.
- Supporting text is displayed between the password field and the submit button.
- The blue **Submit** button submits the registration form.
- The **I already have an account** link takes users back to the login page.
- Tailwind CSS utility classes provide the layout, spacing, colors, borders, and responsive behavior.

The register page is in `app/register/page.tsx`, and its reusable form markup is in
`components/RegisterFormComponent.tsx`. The shared layout is provided by
`components/AuthLayout`.

## Run Locally

From this folder, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
