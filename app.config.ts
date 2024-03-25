import { ViteCustomizableConfig, defineConfig } from "@solidjs/start/config";
import paths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		preset: "vercel",
	},
	vite({ router }) {
		const plugins: ViteCustomizableConfig["plugins"] = [];

		switch (router) {
			case "server":
			case "client":
				plugins.push(paths());
				break;

			default:
				break;
		}

		return {
			plugins,
		};
	},
});
