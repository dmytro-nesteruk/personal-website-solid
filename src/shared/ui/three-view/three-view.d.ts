import { Component, JSX } from "solid-js";

export type ThreeViewFile = {
	id: string;
	type: "file";
	icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
	iconClass?: string;
	title: string;
	url: string;
};

export type ThreeViewFolder = {
	id: string;
	type: "folder";
	icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
	iconClass?: string;
	title: string;
	children: Array<ThreeViewFile>;
	opened: boolean;
};

export type ThreeViewThree = Array<ThreeViewFolder>;

export type ThreeViewProps = {
	three: ThreeViewThree;
	onFolderClick: (id: string) => void;
	class?: string;
};
