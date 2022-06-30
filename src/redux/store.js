import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootRedcuer from "./rootReducer";
import logger from 'redux-logger'

const store = createStore(rootRedcuer,composeWithDevTools(applyMiddleware(logger)))
export default store;