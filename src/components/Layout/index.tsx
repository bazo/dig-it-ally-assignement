import paths from "@app/paths";
import { emailSelector, logout } from "@features/auth/slice";
import { AppBar, Button, Chip, Container, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { LayoutProps } from "src/withLayout";

import useStyles from "./styles";

const Layout: FC<LayoutProps> = ({ children, history }) => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const email = useSelector(emailSelector);

	const handleLogoutClick = (): void => {
		dispatch(logout());
		history.push(paths.LOGIN.toURL());
	};

	return (
		<>
			<CssBaseline />
			<AppBar position="fixed" color="default">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Dig-it-ally
					</Typography>
					<Chip label={email} />
					<Button color="inherit" onClick={handleLogoutClick}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
			<main>
				<Container maxWidth="sm" className={classes.container}>
					<>{children}</>
				</Container>
			</main>
		</>
	);
};

export default Layout;
