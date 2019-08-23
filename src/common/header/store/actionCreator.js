import  * as actionsTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type:actionsTypes.CHANGE_LIST,
    data : fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const searchFocus = ()=> ({
    type:actionsTypes.SEARCH_FOCUS
});

export const searchBlur = ()=> ({
    type:actionsTypes.SEARCH_BLUR
});

export const getList = (dispatch)=>{
    return (dispatch)=> {
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const mouseEnter = () => ({
    type:actionsTypes.SEARCH_MOUSENTER
})

export const mouseLeave= () => ({
    type:actionsTypes.SEARCH_MOUSELEAVE
})

export const switchPage = (page)=> ({
    type:actionsTypes.SEACHER_SWITCH,
    page:page
})