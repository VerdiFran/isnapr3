import {combineReducers, createStore} from "redux"
import formReduser from "./formReducer"


let reducers = combineReducers({
    form: formReduser
})

let store = createStore(reducers)

export default store
