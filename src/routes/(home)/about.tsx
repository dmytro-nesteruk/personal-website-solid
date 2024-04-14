import { RouteSectionProps, useLocation } from "@solidjs/router";
import { createStore } from "solid-js/store";

import { routerBook } from "@shared/configs";
import { ThreeView, ThreeViewThree } from "@shared/ui";
import FolderIcon from "@shared/ui/icons/folder.svg?component-solid";
import MarkdownIcon from "@shared/ui/icons/markdown.svg?component-solid";

const getThree = (pathname: string): ThreeViewThree => [
	{
		title: "bio",
		type: "folder",
		id: "bio-folder",
		icon: FolderIcon,
		iconClass: "w-4 h-4 text-accent-pink",
		opened: routerBook.about.children.bio.path.includes(pathname),
		children: [
			{
				title: "index.md",
				type: "file",
				id: "bio-file",
				icon: MarkdownIcon,
				iconClass: "w-4 h-4 text-secondary-grey text-opacity-70",
				url: routerBook.about.children.bio.path,
			},
		],
	},
	{
		title: "interests",
		type: "folder",
		id: "interests-folder",
		icon: FolderIcon,
		iconClass: "w-4 h-4 text-accent-teal",
		opened: routerBook.about.children.interests.path.includes(pathname),
		children: [
			{
				title: "index.md",
				type: "file",
				id: "interests-file",
				icon: MarkdownIcon,
				iconClass: "w-4 h-4 text-secondary-grey text-opacity-70",
				url: routerBook.about.children.interests.path,
			},
		],
	},
	{
		title: "education",
		type: "folder",
		id: "education-folder",
		icon: FolderIcon,
		iconClass: "w-4 h-4 text-accent-purple",
		opened: routerBook.about.children.education.path.includes(pathname),
		children: [
			{
				title: "index.md",
				type: "file",
				id: "education-file",
				icon: MarkdownIcon,
				iconClass: "w-4 h-4 text-secondary-grey text-opacity-70",
				url: routerBook.about.children.education.path,
			},
		],
	},
];

const About = (props: RouteSectionProps) => {
	const location = useLocation();
	const [three, updateThree] = createStore(getThree(location.pathname));

	const open = (id: string) => {
		updateThree(
			(i) => i.id === id,
			"opened",
			(prev) => !prev
		);
	};

	return (
		<div class="grid md:min-h-full md:auto-cols-max md:grid-flow-col">
			<section class="border-line-dark md:min-h-full md:border-e">
				<article>
					<h2 class="text-ellipsis border-line-dark bg-line-dark px-5 py-2 text-white md:border-b md:bg-transparent md:px-8">
						personal info
					</h2>

					<ThreeView class="p-2 md:w-52 md:max-w-52" three={three} onFolderClick={open} />
				</article>
			</section>

			<div class="flex-grow">{props.children}</div>
		</div>
	);
};

export default About;
