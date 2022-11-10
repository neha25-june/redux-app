import React from "react";

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION_ && window.REDUX_DEVTOOLS_EXTENSION_);

export default store;

