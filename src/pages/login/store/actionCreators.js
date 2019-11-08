import axios from "axios";
import  * as constants from './constants';


export const logout = () =>({
    type:constants.LOGOUT,
    value:false
});

export const  login = ( account , passworld ) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+ account + '&passworld=' + passworld).then((res)=>{
            const result = res.data.data;

            if(result){
                dispatch(
                    {
                        type:constants.CHANGE_LOGIN,
                        value: true
                    }
                );
            }

        })
    }
};