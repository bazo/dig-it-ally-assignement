import path from "@bazo/path-maker";

const paths = {
	HOME: path("/", "paths.home"),
	LOGIN: path("/login", "paths.login"),
};

export type Breadcrumb = {
	path: string;
	label: string;
};

export default paths;
