import { A, useLocation } from "@solidjs/router";
import throttle from "lodash.throttle";
import createFocusTrap from "solid-focus-trap";
import { Component, For, createSignal, onCleanup, onMount } from "solid-js";
import { twMerge } from "tailwind-merge";

import { routerBook } from "@shared/configs";

export type MobileHeaderProps = {
	class?: string;
};

const mobileLinks = [routerBook.home, routerBook.about, routerBook.projects, routerBook.contacts];

export const MobileHeader: Component<MobileHeaderProps> = (props) => {
	const location = useLocation();

	// Menu state
	const [isMenuOpened, setIsMenuOpened] = createSignal(false);

	// Refs
	const [ref, setRef] = createSignal<HTMLElement | null>(null);
	const [burger, setBurger] = createSignal<HTMLElement | null>(null);

	// Focus trap for preventing focus moving outside the menu
	createFocusTrap({
		element: ref,
		enabled: isMenuOpened,
		restoreFocus: true,
		initialFocusElement: burger,
	});

	// Resize observer
	let observer: ResizeObserver;

	// Close menu fn
	const closeMenu = () => {
		document.body.style.overflow = "auto";
		setIsMenuOpened(false);
	};

	// Changing state of menu
	const resizeCallback = throttle((_: ResizeObserverEntry[], obs: ResizeObserver) => {
		if (window.innerWidth > 1024) {
			closeMenu();
			obs.unobserve(document.body);
		}
	}, 100);

	// ResizeObserver assignment
	onMount(() => {
		observer = new ResizeObserver(resizeCallback);
	});

	// Cleanup
	onCleanup(() => {
		if (observer) {
			closeMenu();
			observer.unobserve(document.body);
		}
	});

	const toggleMenu = () => {
		setIsMenuOpened((prev) => {
			const next = !prev;

			if (next) {
				observer.observe(document.body);
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}

			return next;
		});
	};

	return (
		<header class={twMerge("flex flex-col", props.class)} ref={setRef}>
			<nav class="flex flex-col text-secondary-grey">
				<div class="flex flex-grow items-center justify-between border-b border-line-dark">
					<A
						href={routerBook.home.path}
						class={twMerge("focus-styles flex items-center  px-5 py-4")}
						onClick={closeMenu}
					>
						dmytro-nesteruk
					</A>

					{/* Burger */}
					<button
						ref={setBurger}
						class={twMerge("focus-styles flex items-center justify-center p-4")}
						onClick={toggleMenu}
						aria-label={isMenuOpened() ? "Close navigation menu" : "Open navigation menu"}
						title={isMenuOpened() ? "Close navigation menu" : "Open navigation menu"}
					>
						<span
							class={twMerge(
								"origin-center rotate-45 transition-transform",
								isMenuOpened() && "rotate-0"
							)}
						>
							&#10005;
						</span>
					</button>
				</div>

				{/* Menu */}
				<div
					class={twMerge(
						"scroll-container top-[57px] z-10 bg-primary-800",
						isMenuOpened() ? "overflow-auto" : "bottom-full overflow-hidden"
					)}
				>
					<ul
						class={twMerge(
							"flex flex-col transition-transform",
							isMenuOpened() ? "visible translate-y-0" : "invisible translate-y-[-100vh]"
						)}
					>
						<For each={mobileLinks}>
							{({ path, title }) => (
								<li>
									<A
										href={path}
										class={twMerge(
											"focus-styles flex items-center border-b border-line-dark px-5 py-4",
											location.pathname === path && "text-white"
										)}
										onClick={closeMenu}
									>
										{title}
									</A>
								</li>
							)}
						</For>
					</ul>
				</div>
			</nav>
		</header>
	);
};
