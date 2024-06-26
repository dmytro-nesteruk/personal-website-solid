import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@fontsource/fira-code/400.css";

import "./main.css";
import "@shared/styles/prism.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
