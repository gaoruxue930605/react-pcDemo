import React, { PureComponent,Component} from 'react';
import { ListItem ,ListInfo , LoadMore} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render () {
        const {list , getMoreList , page} = this.props;
        return(
            <div>
                {
                list.map((item,index) => {
                    return (
                        // <Link to={'/detail/'+item.get('id')}  key={index}>
                            <Link to={'/detail?id='+item.get('id')}  key={index}>
                            <ListItem>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                                <img className="pic" alt="" src={item.get('imgUrl')} alt=""/>
                            </ListItem>
                        </Link>
                        )
                    })
                }
                <LoadMore onClick={ () => getMoreList(page) }>阅读更多</LoadMore>
            </div>
        )
    }
}
// list:state.get('home').get('articleList')

const mapState = (state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})

const mapDispath = (dispatch) =>({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState,mapDispath)(List);