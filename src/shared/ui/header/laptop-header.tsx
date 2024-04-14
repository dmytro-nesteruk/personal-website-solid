import { useLocation } from "@solidjs/router";
import { Component, For } from "solid-js";
import { twMerge } from "tailwind-merge";

import { routerBook } from "@shared/configs";

export type LaptopHeaderProps = {
	class?: string;
};

const links = [routerBook.home, routerBook.about, routerBook.projects];

const hoverClasses = "transition-opacity hover:underline hover:underline-offset-8 hover:opacity-90";

export const LaptopHeader: Component<LaptopHeaderProps> = (props) => {
	const location = useLocation();

	const isActiveRoute = (url: string) => {
		if (location.pathname === "/" && url === "/") return true;

		if (location.pathname !== "/" && url !== "/") return location.pathname.includes(url);

		return false;
	};

	return (
		<header class={twMerge("flex flex-col", props.class)}>
			<nav class="flex items-center justify-between border-b border-line-dark text-secondary-grey">
				{/* Left side */}
				<div class="flex items-center justify-between">
					<a
						href={routerBook.home.path}
						class={twMerge("focus-styles flex items-center px-8 py-4", hoverClasses)}
					>
						dmytro-nesteruk
					</a>
				</div>

				{/* Center */}
				<ul class="flex flex-grow items-center justify-self-start">
					<For each={links}>
						{({ path, title }) => (
							<li class="border-s border-line-dark last-of-type:border-e">
								<a
									href={path}
									class={twMerge(
										"focus-styles flex items-center border-b-3 px-8 py-4",
										hoverClasses,
										isActiveRoute(path)
											? "border-b-accent-orange text-white"
											: "border-b-transparent"
									)}
								>
									{title}
								</a>
							</li>
						)}
					</For>
				</ul>

				{/* Right side */}
				<a
					href={routerBook.contacts.path}
					class={twMerge(
						"focus-styles flex items-center border-b-3 border-s border-s-line-dark px-8 py-4",
						hoverClasses,
						location.pathname === routerBook.contacts.path
							? "border-b-accent-orange text-white"
							: "border-b-transparent"
					)}
				>
					{routerBook.contacts.title}
				</a>
			</nav>
		</header>
	);
};
