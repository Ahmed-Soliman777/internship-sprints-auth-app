## Prisma ORM and PostgreSQL

Prisma ORM has been added to the project to connect the NestJS server to a PostgreSQL database.

The Prisma schema is located at `prisma/schema.prisma` and uses the PostgreSQL provider. It defines the `User` model with the following fields:

- `id`
- `email`
- `firstName`
- `lastName`
- `password`

The database connection is configured with the `DATABASE_URL` environment variable in `prisma.config.ts`. `PrismaService` uses the Prisma PostgreSQL adapter to create the database client, and the generated Prisma client is stored in `src/generated/prisma`.

Database migrations are stored in `prisma/migrations`. To create or apply a migration, run:

```bash
npx prisma migrate dev
```

To generate the Prisma client, run:

```bash
npx prisma generate
```

To go to Prisma studio, run:

```bash
npx prisma studio
```