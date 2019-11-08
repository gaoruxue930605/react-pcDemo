import  *  as contants from './constants' ;
import axios from 'axios'

const changeDetail = (data) => ({
    type:contants.CHANGE_DETAIL,
    title:data.title,
    content:data.content
});

export const getDeatil = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            dispatch(changeDetail(res.data.data)) ;
        }).catch(() =>{

        })
    }
}