/// <reference types="@solidjs/start/env" />

interface ImportMetaEnv {
	readonly VITE_APP_APP_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
