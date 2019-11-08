import axios from "axios";
import  * as constants from './constants';
import { fromJS }  from 'immutable'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    urlList:result.urlList
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const getMoreList = (page) =>{
    console.log(page);
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res)=>{

            const action = {
                type:constants.GET_MORE_LIST,
                data:fromJS(res.data.data.List),
                nextPage:page+1
            };

            dispatch(action);
        })
    }
}

export const toggleTopShow = (data) =>{
    return (dispatch) =>{
        const action = {
            type:constants.TOGGLE_TOP_SHOW,
            data:data
        };
        dispatch(action);
    }
}