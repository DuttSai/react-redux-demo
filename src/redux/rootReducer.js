import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeRedcuer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootRedcuer = combineReducers({cake:cakeReducer,iceCream:iceCreamReducer})

export default rootRedcuer