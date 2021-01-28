import { emailSelector } from "@features/auth/slice";
import { Avatar } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Home: FC = () => {
	const classes = useStyles();
	const email = useSelector(emailSelector);

	return (
		<div>
			<Avatar alt={email} src={`https://eu.ui-avatars.com/api/?name=${email}&size=256&font-size=0.5`} className={classes.avatar} />
		</div>
	);
};

export default Home;
