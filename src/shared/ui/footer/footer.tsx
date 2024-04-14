import { externalLinks } from "@shared/configs";
import GithubIcon from "@shared/ui/icons/github.svg?component-solid";
import LinkedInIcon from "@shared/ui/icons/linked-in.svg?component-solid";
import UpworkIcon from "@shared/ui/icons/upwork.svg?component-solid";

export const Footer = () => (
	<footer class="absolute bottom-0 left-0 right-0 flex items-center border-t border-line-dark text-secondary-grey">
		<p class="flex flex-grow items-center justify-start p-3 text-start lg:flex-grow-0">
			find me in:
		</p>

		<nav class="flex lg:flex-grow">
			<ul class="flex flex-grow items-center">
				<li>
					<a
						class="focus-styles group flex items-center justify-center border-s border-line-dark p-3"
						target="_blank"
						rel="nofollow"
						title="LinkedIn account"
						aria-label="LinkedIn account"
						href={externalLinks.linkedIn.path}
					>
						<LinkedInIcon class="opacity-40 transition-opacity group-hover:opacity-100" />
					</a>
				</li>

				<li>
					<a
						class="focus-styles group flex items-center justify-center border-s border-line-dark p-3 lg:border-e"
						target="_blank"
						rel="nofollow"
						title="Upwork account"
						aria-label="Upwork account"
						href={externalLinks.upwork.path}
					>
						<UpworkIcon class="opacity-40 transition-opacity group-hover:opacity-100" />
					</a>
				</li>

				<li class="flex justify-end lg:flex-grow">
					<a
						class="focus-styles group flex items-center justify-center gap-2 border-s border-line-dark p-3"
						target="_blank"
						rel="nofollow"
						title="Github account"
						aria-label="Github account"
						href={externalLinks.github.path}
					>
						<span class="hidden opacity-40 transition-opacity group-hover:opacity-100 lg:flex">
							@{externalLinks.github.title}
						</span>
						<GithubIcon class="opacity-40 transition-opacity group-hover:opacity-100" />
					</a>
				</li>
			</ul>
		</nav>
	</footer>
);
