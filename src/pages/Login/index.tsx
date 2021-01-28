import paths from "@app/paths";
import LoginForm from "@features/auth/components/LoginForm";
import { login } from "@features/auth/slice";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import useStyles from "./styles";

const Login: FC<RouteComponentProps> = ({ history }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleLogin = (email: string): void => {
		dispatch(login({ email }));
		history.push(paths.HOME.toURL());
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<LoginForm onSubmit={handleLogin} />
			</div>
		</Container>
	);
};

export default Login;
