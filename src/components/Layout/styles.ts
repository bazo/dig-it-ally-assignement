import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		title: {
			flexGrow: 1,
		},
		container: {
			height: "100vh",
			paddingTop: "64px",
		},
	})
);

export default useStyles;
