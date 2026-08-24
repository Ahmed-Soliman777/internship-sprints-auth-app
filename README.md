## User Module and Database Connection

This branch includes a `UserModule` in `src/user`. The user module contains the user controller and service and is imported into `AppModule`.

The user controller provides these API routes:

- `POST /api/register` to register a user
- `POST /api/login` to log in a user
- `GET /api/users` to get all users
- `GET /api/user/:id` to get a user by ID
- `PUT /api/reset-password` to reset a user's password

The `UserService` uses `PrismaService` to connect to the PostgreSQL database and perform user queries and updates. User passwords are hashed before they are saved, and login and registration return a JWT token.

The database connection uses the `DATABASE_URL` environment variable. `PrismaService` creates the Prisma client with the PostgreSQL adapter, using the Prisma schema in `prisma/schema.prisma`.

## Run the Server Locally

From the `auth-app-server` directory, install the dependencies:

```bash
npm install
```

Set the PostgreSQL connection string in the `DATABASE_URL` environment variable. Then apply the Prisma migrations:

```bash
npx prisma migrate dev
```

Start the server in development mode:

```bash
npm run start:dev
```

The server runs locally on `http://localhost:3000`.
