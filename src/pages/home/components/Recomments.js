import React, { PureComponent,Component} from 'react';
import { ReList } from '../style';
import { connect } from 'react-redux';

class Recomments extends PureComponent {
    render () {
        const { urlList }  = this.props;
        return(
            <div>
                <ReList>
                {
                    urlList.map((item)=>{
                        return(
                            <a href="" className="listItem" key={item.get('id')}>
                                <img src={item.get('url')} alt=""/>
                            </a>
                        )
                        
                    })
                }
                </ReList>
            </div>
        )
    }
}

const mapState = (state) => ({
    urlList : state.getIn(['home','urlList'])
});

export default connect(mapState,null)(Recomments);

