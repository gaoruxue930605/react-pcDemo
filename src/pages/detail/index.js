import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper , Header , Content } from "./style";
import { actionCreators }from './store';
class Detail extends Component {
    render () {
        return (
            <div>
                <DetailWrapper>
                    <Header>
                    {this.props.title}
                    </Header>
                    <Content dangerouslySetInnerHTML = {{__html:this.props.content}} />
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount() {
        // 动态路由传参是取this.props.match.params，参数路由是this.props.localtion.search
        this.props.getDetail(this.props.location.search.split('=')[1]);
    }
}
const mapState = (state) =>({
title: state.getIn(['detail','title']),
content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
    getDetail (id) {
        dispatch(actionCreators.getDeatil(id));
    }
});
// export default connect(mapState,mapDispatch)(Detail);
export default connect(mapState,mapDispatch)(withRouter(Detail));