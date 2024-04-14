export const routerBook = {
	home: {
		title: "_hello",
		path: "/",
	},
	about: {
		title: "_about-me",
		path: "/about",
		children: {
			bio: {
				title: "_bio",
				path: "/about/bio",
			},
			interests: {
				title: "_interests",
				path: "/about/interests",
			},
			education: {
				title: "_education",
				path: "/about/education",
			},
		},
	},
	projects: {
		title: "_projects",
		path: "/projects",
	},
	contacts: {
		title: "_contact-me",
		path: "/contacts",
	},
} as const;

export const externalLinks = {
	github: {
		title: "dmytro-nesteruk",
		path: "https://github.com/dmytro-nesteruk",
	},
	linkedIn: {
		title: "_linked-in",
		path: "https://www.linkedin.com/in/dmytro-nesteruk-5b1a06230",
	},
	telegram: {
		title: "@m31ody",
		path: "https://t.me/m31ody",
	},
	upwork: {
		title: "_upwork",
		path: "https://www.upwork.com/freelancers/~01a544afbe554b903e",
	},
	youTube: {
		title: "_you-tube",
		path: "https://www.youtube.com/@from_ukraine_with_code",
	},
	email: {
		title: "_email",
		path: "mailto:dmytro.nesteruk.13@gmail.com",
	},
} as const;
