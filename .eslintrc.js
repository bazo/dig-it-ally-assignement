module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint",
		"prettier/react",
		"prettier/standard",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react", "@typescript-eslint", "prettier", "jest", "eslint-plugin-simple-import-sort", "import"],
	rules: {
		"simple-import-sort/imports": "error",
		"sort-imports": "off",
		"import/order": "off",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/ban-ts-comment": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/display-name": "warn",
	},
};
