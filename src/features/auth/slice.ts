import type { RootState } from "@app/rootReducer";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
	email: (null as unknown) as string,
	isAuthenticated: false,
};

export type AuthState = typeof initialState;

export type LoginAction = PayloadAction<{ email: string }>;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(_, action: LoginAction) {
			return {
				email: action.payload.email,
				isAuthenticated: true,
			};
		},

		logout() {
			return initialState;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state: RootState): AuthState => state.auth;

export const emailSelector = createSelector(authSelector, (auth) => auth.email);
