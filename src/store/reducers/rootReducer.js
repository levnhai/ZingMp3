import AppReducer from './AppReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    app: AppReducer,
});

export default rootReducer;
