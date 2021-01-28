import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import type { History } from "history";
import type { Store } from "redux";
import logger from "redux-logger";
import { FLUSH, PAUSE, PERSIST, Persistor, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer, { RootState } from "./rootReducer";

const persistConfig = (key: string) => {
	return {
		key,
		storage,
		whitelist: ["auth"],
	};
};

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const createStore = (history: History): { store: Store<RootState>; persistor: Persistor } => {
	const middleware = [routerMiddleware(history)];

	middleware.push(logger);

	const rootReducer = createRootReducer(history);
	const persistedReducer = persistReducer(persistConfig("root"), rootReducer);

	const store = configureStore({
		reducer: persistedReducer,
		middleware: [
			...getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
			...middleware,
		],
	});

	const persistor = persistStore(store);
	return { store, persistor };
};

export default createStore;
