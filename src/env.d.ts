/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PROD_DATABASE_URL: string;
	readonly PROD_LUCIA_AUTH_SECRET: string;
	// add other env variables here
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
