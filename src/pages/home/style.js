import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
margin: 0 auto;
background:red;
`;

export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
`;

export const HomeRight = styled.div`
width:280px;
float:right;
padding-top:30px;

`;

export const TopicWrapper = styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
float:left;
background:#f7f7f7;
height:32px;
font-size:14px;
color:#000000;
border:1px solid #dcdcdc;
border-radius:4px;
margin-left:18px;
display:flex;
justify-content:space-between;
align-item:center;
margin-bottom:18px;
.TopicLabel{
    padding:0 10px;
    height:32px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`;

export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
display:flex;
justify-content:space-between;
align-item:center;
.pic{
    width:125px;
    height:100px;
    border-radius:10px;
}

`;

export const ListInfo = styled.div`
width:500px;
display:flex;
justify-content:flex-start;
flex-direction:column;
align-item:top;
.title{
    font-size:18px;
    font-weight:bold;
    color:#333;
    line-height:23px;
}
.desc{
    font-size:13px;
    line-height:24px;
    color:#999;
}
`;

export const ReList = styled.div`
.listItem{
    width:100%;
    img{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
}`;

export const ScanCode = styled.div`
margin-bottom: 30px;
padding: 10px 20px;
// width: 100%;
border: 1px solid #f0f0f0;
border-radius: 6px;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items:center;
.qrcode{
    width: 60px;
    height: 60px;
    opacity: .85;
}
.info{
    height: 60px;
    margin-left: 7px;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:flex-start;
    .title{
        font-size: 15px;
        color: #333;
    }
    .description{
        font-size: 13px;
        color: #999;
    }
}
`;

export const WriterWrapper = styled.div`
width：100%;
margin-bottom: 20px;
padding-top: 0;
font-size: 13px;
text-align: center;
`;

export const WriterTitle = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
span {
    font-size: 14px;
    color: #969696;
}
`;

export const  WriterList = styled.div`
margin: 0 0 20px;
text-align: left;
`;

export const WriterListItem = styled.div`
margin-top: 15px;
display:flex;
justify-content:flex-start;
align-items:center;
position:relative;
.avatar{
    display: block;
    cursor: pointer;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
}
.user{
    height:48px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;
    .name{
        font-size: 14px;
        color:#333;
    }
    .dec{
        font-size: 12px;
        color: #969696;
    }
}
.follow{
    position:absolute;
    right:0;
    top:5px;
    font-size: 13px;
    color: #42c02e
}
`;

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius: 20px;
    margin: 20px 0;
    color:#fff;
    cursor:pointer;
`;

export const BackTop = styled.div`
position:fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
text-align:center;
border:1px solid #ccc;
font-size:26px;
`;
