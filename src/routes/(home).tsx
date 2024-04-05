import { A, RouteSectionProps } from "@solidjs/router";

const MainLayout = (props: RouteSectionProps) => (
	<main class="mx-auto flex min-h-screen p-4 text-center text-gray-700 lg:p-16">
		<div class="flex flex-grow flex-col rounded-lg border border-line-dark bg-primary-800">
			<header>
				<nav>
					<ul>
						<li>
							<A href="/">Home</A>
						</li>
						<li>
							<A href="/contacts">Contacts</A>
						</li>
					</ul>
				</nav>
			</header>
			{props.children}
		</div>
	</main>
);

export default MainLayout;
