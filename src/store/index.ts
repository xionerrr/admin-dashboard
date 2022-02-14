import { userReducer } from './reducers/user/reducer';
import { combineReducers, createStore } from "redux";


const reducers = combineReducers({
    userAuth: userReducer 
})

export const store = createStore(reducers)

