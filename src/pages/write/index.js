import React, { PurComponent , Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends Component{
    render (){
        const { loginStatus } = this.props;
        if(!loginStatus){

            return <Redirect to='/login'/>

        }else {
            return (
                <div>
                    写文章
                </div>
            )
           
        }
        
    }
}

const mapState = (state) =>({

    loginStatus:state.getIn(['login','login'])
    
})


export default connect(mapState,null)(Write);