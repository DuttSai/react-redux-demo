import { createStore } from "redux";
import rootRedcuer from "./rootReducer";


const store = createStore(rootRedcuer)
export default store;