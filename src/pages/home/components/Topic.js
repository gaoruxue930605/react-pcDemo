import React, { PureComponent,Component} from 'react';
import { TopicWrapper,TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
    render () {
        const { list } = this.props;
        return(
            <TopicWrapper>
                {list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img alt="123" className="topicImg" src={item.get('imgUrl')}></img>
                            <div className="TopicLabel">{item.get('title')}</div>
                        </TopicItem>
                    )
                })
            }
            </TopicWrapper>
        )
    }
}

const mapState = (state) =>({
    list : state.get('home').get('topicList')
});

export default connect(mapState,null)(Topic);