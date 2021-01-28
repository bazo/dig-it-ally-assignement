import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		paddingTop: theme.spacing(20),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100vh",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
}));

export default useStyles;
