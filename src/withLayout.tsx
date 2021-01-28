import React, { ComponentClass, FC } from "react";
import { match, Route, RouteComponentProps, RouteProps } from "react-router";

export type LayoutProps<P = unknown> = Omit<RouteComponentProps<P> & RouteProps, "component" | "render"> & {
	computedMatch: match;
};

export type Layout = FC<LayoutProps>;

const renderLayout = (
	Component: ComponentClass,
	Layout: Layout,
	props: Omit<RouteProps, "component"> & { path: string; computedMatch: match },
	rest: RouteComponentProps
) => {
	const mergedProps = { ...props, ...rest };
	return (
		<Layout {...mergedProps}>
			<Component {...mergedProps} />
		</Layout>
	);
};

interface Props extends RouteProps {
	layout: Layout;
}

const WithLayout: FC<Props> = ({ component, layout, ...props }: Props) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	return <Route {...props} render={renderLayout.bind(null, component, layout, props)} />;
};

export default WithLayout;
