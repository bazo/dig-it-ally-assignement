import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ConnectedRouter } from "connected-react-router";
import type { History } from "history";
import React, { FC, useMemo } from "react";

import Routes from "./routes";

interface Props {
	history: History;
}

const App: FC<Props> = ({ history }: Props) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ConnectedRouter history={history}>
				<Routes />
			</ConnectedRouter>
		</ThemeProvider>
	);
};

export default App;
