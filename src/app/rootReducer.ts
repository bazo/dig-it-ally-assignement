import { connectRouter } from "connected-react-router";
import type { History } from "history";
import { combineReducers } from "redux";

import auth from "../features/auth/slice";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		auth,
	});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
