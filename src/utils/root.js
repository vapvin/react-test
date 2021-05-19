import { combineReducers } from 'redux';
import authenticated from './Auth/auth';
import picturesReducer from './Picture/upload';

export default combineReducers({
    authenticated,
    picturesReducer
});