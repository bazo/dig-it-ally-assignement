import App from "@app/app";
import { createBrowserHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./app/createStore";

const history = createBrowserHistory();
const { store, persistor } = createStore(history);

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App history={history} />
		</PersistGate>
	</Provider>,

	document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
