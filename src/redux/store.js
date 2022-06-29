import { createStore } from "redux";
import cakeRedcuer from "./cake/cakeRedcuer";


const store = createStore(cakeRedcuer)
export default store;