import { A, useLocation } from "@solidjs/router";
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

	return (
		<header class={twMerge("flex flex-col", props.class)}>
			<nav class="flex items-center justify-between border-b border-line-dark text-secondary-grey">
				{/* Left side */}
				<div class="flex items-center justify-between">
					<A
						href={routerBook.home.path}
						class={twMerge("focus-styles flex items-center px-8 py-4", hoverClasses)}
					>
						dmytro-nesteruk
					</A>
				</div>

				{/* Center */}
				<ul class="flex flex-grow items-center justify-self-start">
					<For each={links}>
						{({ path, title }) => (
							<li class="border-l border-line-dark last-of-type:border-r">
								<A
									href={path}
									class={twMerge(
										"focus-styles flex items-center border-b-3 px-8 py-4",
										hoverClasses,
										location.pathname === path
											? "border-b-accent-orange text-white"
											: "border-b-transparent"
									)}
								>
									{title}
								</A>
							</li>
						)}
					</For>
				</ul>

				{/* Right side */}
				<A
					href={routerBook.contacts.path}
					class={twMerge(
						"focus-styles flex items-center border-b-3 border-l border-l-line-dark px-8 py-4",
						hoverClasses,
						location.pathname === routerBook.contacts.path
							? "border-b-accent-orange text-white"
							: "border-b-transparent"
					)}
				>
					{routerBook.contacts.title}
				</A>
			</nav>
		</header>
	);
};