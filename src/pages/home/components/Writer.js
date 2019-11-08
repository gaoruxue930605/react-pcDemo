import React, { PureComponent, Component } from 'react';
import { WriterWrapper , WriterTitle , WriterList , WriterListItem} from '../style';

class Writer extends PureComponent {
    render () {
        return(
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <span>换一批</span>
                </WriterTitle>
            <WriterList>
                <WriterListItem>
                    <a href="" className="avatar">
                        <img src="//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    </a>
                    <div className="user">
                        <a href="" className="name">三儿王屿</a>
                        <p className="dec"> 写了165.9k字 · 3.5k喜欢</p>
                    </div>
                    <span className="follow">
                        +关注
                    </span>
                </WriterListItem>
                <WriterListItem>
                    <a href="" className="avatar">
                        <img src="//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                    </a>
                    <div className="user">
                        <a href="" className="name">三儿王屿</a>
                        <p className="dec"> 写了165.9k字 · 3.5k喜欢</p>
                    </div>
                    <span className="follow">
                        +关注
                    </span>
                </WriterListItem>
            </WriterList>
            </WriterWrapper>
        )
    }
}

export default Writer;