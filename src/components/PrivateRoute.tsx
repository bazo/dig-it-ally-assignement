import paths from "@app/paths";
import { authSelector } from "@features/auth/slice";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export function PrivateRoute(ComposedComponent: React.ComponentType<unknown>): FC {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const Secured = (props: any) => {
		const { isAuthenticated } = useSelector(authSelector);
		return (
			<Route
				{...props}
				render={({ location }) =>
					isAuthenticated ? (
						<ComposedComponent {...props} />
					) : (
						<Redirect
							to={{
								pathname: paths.LOGIN.toURL(),
								state: { from: location },
							}}
						/>
					)
				}
			/>
		);
	};
	return Secured;
}
