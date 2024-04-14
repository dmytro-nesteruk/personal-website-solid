import { Link, Meta, Title } from "@solidjs/meta";

import { routerBook } from "@shared/configs";

const meta = {
	title: "Interests | Dmytro Nesteruk",
	description:
		"Welcome to Dmytro Nesteruk's portfolio - Your gateway to stunning, user-centric web experiences! As a passionate front-end developer, I blend creativity with technical prowess to craft visually captivating and seamlessly functional websites. Explore my diverse skill set and past projects to discover how I can elevate your digital presence.",
	canonical: `${import.meta.env.VITE_APP_BASE_URL}${routerBook.about.children.interests.path}`,
	og: {
		url: `${import.meta.env.VITE_APP_BASE_URL}${routerBook.about.path}`,
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

const Bio = () => (
	<>
		<>
			<Title>{meta.title}</Title>
			<Meta name="description" content={meta.description} />

			{/* Open Graph */}
			<Meta property="og:url" content={meta.og.url} />
			<Meta property="og:type" content={meta.og.type} />
			<Meta property="og:title" content={meta.title} />
			<Meta property="og:description" content={meta.description} />
			<Meta property="og:image" content={meta.og.image.url} />
			<Meta property="og:image:alt" content={meta.og.image.alt} />
			<Meta property="og:image:type" content={meta.og.image.type} />
			<Meta property="og:image:width" content={meta.og.image.width} />
			<Meta property="og:image:height" content={meta.og.image.height} />

			{/* Robots */}
			<Meta name="robots" content="index,follow" />

			{/* Canonical */}
			<Link rel="canonical" href={meta.canonical} />
		</>

		<section>
			<h1 class="text-light-grey">interests</h1>
		</section>
	</>
);

export default Bio;
