import { Meta, Title } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";

const getHTML = cache(async () => {
	"use server";

	const prism = await import("prismjs").then((m) => m.default);
	const { prismHighlightURL } = await import("@shared/utils");

	prismHighlightURL(prism);

	const snippet = [
		`/* Read more about me */`,
		`const aboutURL = "[${import.meta.env.VITE_APP_APP_URL}](${import.meta.env.VITE_APP_APP_URL})"`,
		`const projectsURL =  "[http://localhost:3000/projects](http://localhost:3000/projects)"`,
	].join("\n");

	return prism.highlight(snippet, prism.languages.javascript, "javascript");
}, "index-page-html-template");

export const route = {
	load: () => getHTML(),
};

const Index = () => {
	const html = createAsync(() => getHTML());

	/* eslint-disable-next-line */

	return (
		<>
			{/* Meta data */}
			<>
				<Title>Home | Dmytro Nesteruk</Title>
				<Meta name="description" content="Hello" />
			</>

			{/* Layout */}
			<section class="flex min-h-full flex-col justify-center gap-14 p-6 lg:mx-auto lg:max-w-4xl">
				<div class="flex flex-col gap-2">
					<p class="text-body text-light-grey">Hi all. I am</p>

					<h1 class="flex flex-col gap-2">
						<span class="max-w-80 text-headline text-light-grey md:max-w-none">
							Dmytro Nesteruk
						</span>
						<span class="text-body text-secondary-purple sm:text-subheadline">
							{"> "} Font-end engineer
						</span>
					</h1>
				</div>

				<article>
					<pre class="language-js">
						{/* eslint-disable-next-line */}
						<code class="language-js" innerHTML={html()} />
					</pre>
				</article>
			</section>
		</>
	);
};

export default Index;
