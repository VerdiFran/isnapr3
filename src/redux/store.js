import {applyMiddleware, combineReducers, createStore} from "redux"
import formReduser from "./formReducer"
import resultReducer from "./resultReducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    form: formReduser,
    result: resultReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
