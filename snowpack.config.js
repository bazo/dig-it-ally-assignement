// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require("./tsconfig.json");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: "/", static: true },
		src: { url: "/dist" },
	},
	plugins: [
		"@snowpack/plugin-react-refresh",
		"@snowpack/plugin-dotenv",
		"@snowpack/plugin-typescript",
		[
			"@snowpack/plugin-run-script",
			{
				cmd: "eslint src --ext .js,jsx,.ts,.tsx",
				// Optional: Use npm package "eslint-watch" to run on every file change
				watch: "esw -w --clear src --ext .js,jsx,.ts,.tsx",
			},
		],
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		{ match: "routes", src: ".*", dest: "/index.html" },
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
	alias: {
		src: "./src",
		"@app": "./src/app",
		"@components": "./src/components",
		"@features": "./src/features",
		"@pages": "./src/pages",
	},
};
