import { combineReducers } from 'redux';
import tabReducer from './tab/tabReducer';
import marketReducer from './tab/marketReducer';

export default combineReducers({
	tabReducer,
	marketReducer,
});
