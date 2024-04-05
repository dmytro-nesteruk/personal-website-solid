module.exports = {
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w+)\(([^)]+)\):\s(.*)$/,
			headerCorrespondence: ["type", "scope", "subject"],
		},
	},
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"chore",
				"revert",
				"feat",
				"fix",
				"improvement",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"build",
				"ci",
			],
		],
		"type-empty": [0], // Disable this rule
		"subject-empty": [0], // Disable this rule
		"subject-min-length": [2, "always", 10], // Ensure subject is at least 10 characters
		"custom-format": [
			2,
			"always",
			(parsed) => {
				const { type, subject } = parsed;

				const types = [
					"chore",
					"revert",
					"feat",
					"fix",
					"improvement",
					"docs",
					"style",
					"refactor",
					"perf",
					"test",
					"build",
					"ci",
				];
				const subjectMinLength = 10;

				if (!types.includes(type)) {
					return [
						false,
						`ERROR: Type "${type}" is not allowed. Must be one of: ${types.join(", ")}`,
					];
				}

				if (subject && subject.length < subjectMinLength) {
					return [
						false,
						`ERROR: Subject is too short. Must be at least ${subjectMinLength} characters`,
					];
				}

				return [true, ""];
			},
		],
	},
	plugins: [
		{
			rules: {
				"custom-format": (parsed) => {
					const { type, scope, subject } = parsed;
					if (type && subject && scope) {
						return [true, ""];
					}
					return [
						false,
						'ERROR: Commit message does not follow the required format "type(scope): subject (min. 10 characters)"',
					];
				},
			},
		},
	],
};
