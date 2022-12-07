import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userDataReducer from './userDataReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    userData:userDataReducer,
})

export default rootReducer