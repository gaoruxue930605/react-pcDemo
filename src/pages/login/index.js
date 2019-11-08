import React, { PurComponent , Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox ,Input ,Button} from './style';
import { actionCreators } from './store';

class Login extends Component{
    render (){
        const { loginStatus,login } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="请输入账号" ref={(input)=>{this.account = input}}></Input>
                        <Input placeholder="请输入密码" type="passworld" ref={ (input) => { this.passworld = input}}></Input>
                        <Button onClick={() => login(this.account,this.passworld)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/'/>
        }
        
    }
}
const mapState = (state) =>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => {
   return  {

        login(acountElem,passworldElem){
            dispatch(actionCreators.login(acountElem.value,passworldElem.value))
        }

    }
}

export default connect(mapState,mapDispatch)(Login);