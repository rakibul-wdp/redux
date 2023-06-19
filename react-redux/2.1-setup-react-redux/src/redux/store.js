import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const store = createStore(counterReducer);

export default store;