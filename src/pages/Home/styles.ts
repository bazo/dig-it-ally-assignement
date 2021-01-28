import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	avatar: {
		margin: "0 auto",
		marginTop: theme.spacing(20),
		width: theme.spacing(32),
		height: theme.spacing(32),
	},
}));

export default useStyles;
