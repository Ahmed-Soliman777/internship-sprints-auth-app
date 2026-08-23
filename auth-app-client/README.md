# Auth App Login UI

This Next.js client contains a simple responsive login screen for Auth App.

## Login UI Design

- On large screens, the page shows a branding and image section beside the login form.
- On smaller screens, the branding section is hidden and the form is centered for easier use on mobile.
- The form includes fields for an email address or mobile number and a password.
- The blue **Log in** button is the primary action.
- A secondary **Create new account** link takes users to the registration page.
- Tailwind CSS utility classes provide the layout, spacing, colors, borders, and responsive behavior.

The main page is in `app/page.tsx`, and the reusable form markup is in
`components/LoginFormComponent.tsx`. Login imagery and other static assets belong in
the `public` folder.

## Run Locally

From this folder, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
