import React, { PureComponent, Component } from 'react';
import  { connect } from  'react-redux' ;

import Topic from './components/Topic';
import Recomments from './components/Recomments';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreators } from "./store";


import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    ScanCode,
    BackTop
} from './style';



class Home extends PureComponent {

    handleSCrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="bannerImg" alt="dog" src="//upload-images.jianshu.io/upload_images/1464364-6de002ec989a92e4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/625/h/270"></img>
                    {/* <img className="bannerImg"  src="./assets/home-banner.jpg"/> */}
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recomments/>
                    <ScanCode>
                        <div>
                            <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
                        </div>
                        <div className="info">
                            <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                            <div className="description">随时随地发现和创作内容</div>
                        </div>
                    </ScanCode>
                    <Writer/>
                </HomeRight>
                {this.props.showSCroll ?  <BackTop onClick={this.handleSCrollTop}>回到顶部</BackTop> : null}
               
            </HomeWrapper>
        )
        
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeSCrollTop);
    }
    
    bindEvents(){
        window.addEventListener('scroll',this.props.changeSCrollTop);
    }
}
const mapState = (state) => ({
    showSCroll:state.getIn(['home','showScroll'])
})
// 容器组件
const mapDispath = (dispatch) => ({
    changeHomeData () {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeSCrollTop(){
        if(document.documentElement.scrollTop>400){

            dispatch(actionCreators.toggleTopShow(true));

        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }

    }
})


export default connect(mapState,mapDispath)(Home);