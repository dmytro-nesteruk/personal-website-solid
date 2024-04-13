import { defineConfig } from "@solidjs/start/config";
import path from "node:path";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
	server: {
		preset: "github-pages",
	},
	vite() {
		return {
			plugins: [solidSvg()],
			resolve: {
				alias: [
					{ find: "@routes", replacement: path.resolve("src", "routes") },
					{ find: "@widgets", replacement: path.resolve("src", "widgets") },
					{ find: "@features", replacement: path.resolve("src", "features") },
					{ find: "@entities", replacement: path.resolve("src", "entities") },
					{ find: "@shared", replacement: path.resolve("src", "shared") },
				],
			},
		};
	},
});
