import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from "react-router-dom";
// react 兼容到 ie8;

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    HeaderOut
} from './style';



class Header extends Component{
    
    getListArea () {
        const { focused, list ,page , totalPage , mouseIn , handleMouseEnter , handleMouseLeave , handleSwitch}=this.props;
        const newList = list.toJS();
        const  pageList = [];

        if (newList.length) {
            for(let i= (page - 1) * 10 ; i< page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        

        if(focused || mouseIn ){
            return (
                <SearchInfo 
                onMouseEnter= { handleMouseEnter } 
                onMouseLeave = { handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => { handleSwitch(page,totalPage,this.spinIcon) }  }>
                        <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe613;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList} 
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const {focused,handleFocus,handleBlur,list ,login , logout} = this.props;
        return ( 
            <HeaderOut>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left ">下载App</NavItem>
                        { login ? <NavItem className="right" onClick = {logout}>退出</NavItem> : 
                            <Link to="/login">
                                <NavItem className="right">登陆</NavItem>
                            </Link>
                        }
                        <NavItem className="right">
                            <span className="iconfont">&#xe666;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition 
                            in = {focused} 
                            timeout = {200} 
                            classNames="slide">
                                <NavSearch className={focused ? 'focused' : ''} 
                            onFocus={() => handleFocus(list)}
                            onBlur={handleBlur}/>
                            </CSSTransition>
                            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62b;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                        <Addition>
                        
                        <Link to="/write">
                            <Button className="writing">
                            <span className="iconfont">&#xe569;</span>
                                写文章
                            </Button>
                        </Link>
                        
                        <Button className="reg">注册</Button>
                    </Addition>
                    </Nav>
                    
                </HeaderWrapper>
            </HeaderOut>  
        )

    }
}


const mapStateToProps = (state) =>{
    return {
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page : state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
        // focused : state.get('header').get('focused')
    }

}
const mapDispathToProps = (dispatch) =>{
    return {
        handleFocus(list){

            (list.size === 0) && dispatch(actionCreators.getList());

            dispatch(actionCreators.searchFocus());

        },
        handleBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleSwitch(page,totalPage,spinIcon){

            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig , ' ');

            if(originAngle) {
                originAngle = parseInt (originAngle, 10);
            }else{
                originAngle = 0 ;
            }

            spinIcon.style.transform = 'rotate('+originAngle +7200 +'deg)' ;
            
            if( page < totalPage ){
                dispatch(actionCreators.switchPage( page + 1 ));
            } else {
                dispatch(actionCreators.switchPage(1));
            }
            
        },
        logout(){
            dispatch(loginActionCreators.logout());
        }


    }

}

export default connect(mapStateToProps,mapDispathToProps)(Header);