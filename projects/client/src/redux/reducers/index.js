import {combineReducers} from 'redux'
import authReducer from './authReducer'
import userDataReducer from './userDataReducer'
import userDetailReducer from './userDetailReducer'

const rootReducer = combineReducers({
    auth:authReducer,
    userData:userDataReducer,
    userDetail:userDetailReducer
})

export default rootReducer