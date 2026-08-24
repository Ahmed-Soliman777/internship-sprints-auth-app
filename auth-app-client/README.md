# Auth App Reset Password UI

This Next.js client contains a simple responsive reset-password screen for Auth App.

## Reset Password UI Design

- The form includes an email address and the new password input if email exists at database.
- On smaller screens, the form is centered for easier use on mobile.
- Tailwind CSS utility classes provide the layout, spacing, colors, borders, and responsive behavior.

The reset-password page is located in `app/reset-password/page.tsx`, with reusable
form markup in `components/ResetPasswordFormComponent.tsx`.

## Run Locally

From this folder, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
