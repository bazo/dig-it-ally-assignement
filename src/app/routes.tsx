import Layout from "@components/Layout";
import { PrivateRoute } from "@components/PrivateRoute";
import Home from "@pages/Home";
import Login from "@pages/Login";
import React, { FC } from "react";
import { Route, RouteProps, Switch } from "react-router-dom";
import WithLayout from "src/withLayout";

import paths from "./paths";

const MyLayout = (props: RouteProps) => <WithLayout {...props} layout={Layout} />;

const Routes: FC = () => {
	return (
		<Switch>
			<Route path={paths.LOGIN.path} exact component={Login} />

			<MyLayout path={paths.HOME.path} exact component={PrivateRoute(Home)} />
		</Switch>
	);
};

export default Routes;
