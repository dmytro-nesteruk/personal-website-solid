import { Meta } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";

import { Footer, LaptopHeader, MobileHeader } from "@shared/ui";

const MainLayout = (props: RouteSectionProps) => (
	<>
		<Meta
			name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
		/>
		<div class="absolute bottom-0 left-0 right-0 top-0 text-gray-700">
			<div class="absolute bottom-0 left-0 right-0 top-0 m-4 flex flex-col rounded-lg border border-line-dark bg-primary-800 lg:m-16">
				<LaptopHeader class="hidden lg:block" />
				<MobileHeader class="lg:hidden" />

				<main class="scroll-container">{props.children}</main>

				<Footer />
			</div>
		</div>
	</>
);

export default MainLayout;
