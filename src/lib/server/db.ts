// src/lib/server/db.ts
import { PROD_DATABASE_URL } from '$env/static/private';

const databaseUrl =
	process.env.NODE_ENV === 'production' ? PROD_DATABASE_URL : process.env.DATABASE_URL;
