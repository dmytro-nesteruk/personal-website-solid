import { Link, Meta, Title } from "@solidjs/meta";
import { cache, createAsync } from "@solidjs/router";

import { routerBook } from "@shared/configs";

const meta = {
	title: "Home | Dmytro Nesteruk",
	description:
		"Welcome to Dmytro Nesteruk's portfolio - Your gateway to stunning, user-centric web experiences! As a passionate front-end developer, I blend creativity with technical prowess to craft visually captivating and seamlessly functional websites. Explore my diverse skill set and past projects to discover how I can elevate your digital presence.",
	canonical: `${import.meta.env.VITE_APP_BASE_URL}`,
	og: {
		url: `${import.meta.env.VITE_APP_BASE_URL}`,
		type: `website`,
		image: {
			url: `${import.meta.env.VITE_APP_BASE_URL}/images/my-photo.webp`,
			alt: `Dmytro Nesteruk - front-end engineer`,
			type: `image/webp`,
			height: "532",
			width: "648",
		},
	},
};

const getHTML = cache(async () => {
	"use server";

	const prism = await import("prismjs").then((m) => m.default);
	const { prismHighlightURL } = await import("@shared/utils");

	prismHighlightURL(prism);

	const snippet = [
		`/* Read more about me */`,
		`const aboutURL = "[${import.meta.env.VITE_APP_BASE_URL}${routerBook.about.path}](${import.meta.env.VITE_APP_BASE_URL}${routerBook.about.path})"`,
		`const projectsURL = "[${import.meta.env.VITE_APP_BASE_URL}${routerBook.projects.path}](${import.meta.env.VITE_APP_BASE_URL}${routerBook.projects.path})"`,
	].join("\n");

	return prism.highlight(snippet, prism.languages.javascript, "javascript");
}, "index-page-html-template");

export const route = {
	load: () => getHTML(),
};

const Index = () => {
	const html = createAsync(() => getHTML());

	return (
		<>
			{/* Meta data */}
			<>
				<Title>{meta.title}</Title>
				<Meta name="description" content={meta.description} />

				{/* Open Graph */}
				<Meta property="og:url" content={meta.og.url} />
				<Meta property="og:type" content={meta.og.type} />
				<Meta property="og:image" content={meta.og.image.url} />
				<Meta property="og:image:alt" content={meta.og.image.alt} />
				<Meta property="og:image:type" content={meta.og.image.type} />
				<Meta property="og:image:width" content={meta.og.image.width} />
				<Meta property="og:image:height" content={meta.og.image.height} />

				<Link rel="canonical" href={meta.canonical} />
			</>

			{/* Layout */}
			<section class="flex min-h-full flex-col justify-center gap-14 p-6 lg:mx-auto lg:max-w-4xl">
				<div class="flex flex-col gap-2">
					<p class="text-body text-light-grey">Hi all. I am</p>

					<h1 class="flex flex-col gap-2">
						<span class="max-w-80 text-headline text-light-grey md:max-w-none">
							Dmytro Nesteruk
						</span>
					</h1>
					<span class="text-body text-secondary-purple before:pe-3 before:content-['>'] sm:text-subheadline">
						Font-end engineer
					</span>
				</div>

				<pre class="language-js">
					{/* eslint-disable-next-line */}
					<code class="language-js" innerHTML={html()} />
				</pre>
			</section>
		</>
	);
};

export default Index;
