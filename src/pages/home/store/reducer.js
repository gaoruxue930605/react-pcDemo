import { fromJS }  from 'immutable';
import * as  constants  from './constants';

const defaultState = fromJS ({
    topicList:[],
    articleList:[],
    urlList:[],
    articlePage: 1,
    showScroll:false
});

const changeHomeData = ( state , action ) => {
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        urlList:fromJS(action.urlList)
    })
}

const  getMoreList = (state , action ) =>{
    return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage:action.nextPage
    });
}

export default (state = defaultState , action ) =>{
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.GET_MORE_LIST:
            return getMoreList(state,action);
            // state.set('articleList',);
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll',action.data);
        default:
            return state;
    }
}