import type Prism from "prismjs";

export const prismHighlightURL = (prism: typeof Prism) => {
	if (typeof prism === "undefined") {
		return;
	}

	const ANCHOR_PATTERN = /\[.*?\]\(https?:\/\/.*?\)/;
	const CONTENT_PATTERN = /\[.*?\]/;
	const URL_PATTERN = /\(https?:\/\/.*?\)/;

	prism.hooks.add("wrap", (env) => {
		const e = env;

		if (ANCHOR_PATTERN.exec(env.content)) {
			// eslint-disable-next-line
			const content = env.content.match(CONTENT_PATTERN)?.[0].replace(/[\[\]]/g, '"') || "";
			// eslint-disable-next-line
			const url = env.content.match(URL_PATTERN)?.[0].replace(/[\(\)]/g, "") || "";

			e.tag = "a";
			e.attributes.href = url;
			e.content = content;
		}
	});
};
