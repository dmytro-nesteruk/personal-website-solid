import { useLocation } from "@solidjs/router";
import { Component, For } from "solid-js";
import { twMerge } from "tailwind-merge";

import ChevronIcon from "@shared/ui/icons/chevron.svg?component-solid";

import { ThreeViewFile, ThreeViewFolder, ThreeViewProps } from "./three-view.d";

export const isThreeViewFolder = (item: ThreeViewFolder | ThreeViewFile): item is ThreeViewFolder =>
	item.type === "folder";

export const ThreeView: Component<ThreeViewProps> = (props) => {
	const location = useLocation();

	const isActive = (url: string) => location.pathname.includes(url);

	return (
		<nav class={twMerge(props.class)}>
			<ul>
				<For each={props.three}>
					{(folder) => (
						<li class="py-1 last:pb-0">
							<div
								tabIndex={0}
								role="button"
								class="focus-styles flex w-full flex-grow items-center gap-1 py-1 md:py-0"
								onClick={() => props.onFolderClick(folder.id)}
							>
								<ChevronIcon
									aria-hidden
									class={twMerge(
										"inline-block h-6 w-6 origin-center rotate-0 text-secondary-grey transition-transform",
										folder.opened && "rotate-90"
									)}
								/>

								<span class="flex items-center gap-2">
									{folder.icon && <folder.icon class={folder.iconClass} />}
									<span class="overflow-hidden text-ellipsis text-secondary-grey">
										{folder.title}
									</span>
								</span>
							</div>

							<div class="overflow-hidden">
								<ul
									class={twMerge(
										"invisible overflow-hidden ps-7 transition-all",
										folder.opened
											? "visible max-h-max translate-y-0"
											: "max-h-0 translate-y-[-100%]"
									)}
								>
									<For each={folder.children}>
										{(file) => (
											<li class="py-1 last:pb-0">
												<a
													href={file.url}
													class={twMerge(
														"focus-styles flex items-center gap-2 py-1 text-secondary-grey transition-colors hover:text-white hover:underline hover:underline-offset-4 md:py-0",
														isActive(file.url) && "text-white underline underline-offset-4"
													)}
												>
													<file.icon class={file.iconClass} />
													<span class="overflow-hidden text-ellipsis">{file.title}</span>
												</a>
											</li>
										)}
									</For>
								</ul>
							</div>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
};
