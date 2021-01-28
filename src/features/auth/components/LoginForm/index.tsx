import { checkUsername } from "@api";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AnyObject } from "final-form";
import React, { FC } from "react";
import { Field, Form } from "react-final-form";

import useStyles from "./styles";

interface Values {
	username: string;
}

interface Props {
	onSubmit: (email: string) => void;
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
	const classes = useStyles();

	const handleSubmit = async ({ username }: Values): Promise<AnyObject | void> => {
		const { error, data } = await checkUsername(username);
		if (error) {
			return { username: data };
		}

		onSubmit(data);
	};

	return (
		<Form<Values>
			onSubmit={handleSubmit}
			render={({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					<Field name="username">
						{({ input: { name, onChange, onBlur, value }, meta }) => {
							return (
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									label="Username"
									name={name}
									autoFocus
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									error={meta.submitFailed}
									helperText={meta.submitError}
								/>
							);
						}}
					</Field>

					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={pristine || submitting}>
						Login
					</Button>
				</form>
			)}
		/>
	);
};

export default LoginForm;
