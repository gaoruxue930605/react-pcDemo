// redux-immutable 统一数据格式
import { combineReducers } from 'redux-immutable';
import { reducer  as headerReducer} from '../common/header/store';

export default  combineReducers({
    header:headerReducer
})