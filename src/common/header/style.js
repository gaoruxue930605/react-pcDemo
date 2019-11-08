import  styled  from 'styled-components';
import logoPic from '../../static/assets/logo.png';

export const HeaderOut = styled.div`
height:58px;
width:100%;
border-bottom:1px solid #f0f0f0;
`;
export const HeaderWrapper = styled.div`
min-width: 768px;
max-width: 1440px;
margin: 0 auto;
position:relative;
`;
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:100px 56px;
`;

export const Nav = styled.div`
width:960px;
margin:0 auto;
height:56px;
padding-right:70px;
box-sizing:border-box;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
        &.iconfont{
            font-size:17px !important;
        }
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
float:left;
position:relative;
.zoom{
    position:absolute;
    right:5px;
    width:30px;
    height:30px;
    border-radius:15px;
    bottom:5px;
    line-height:30px;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
    }
}
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
margin-top:9px;
width:160px;
height:38px;
padding:0 30px 0 20px;
box-sizing:border-box;
outline:none;
border-radius:19px;
font-size:14px;
border: 1px solid #eee;
margin-left:20px;
color:#666;
&::placeholder:{
    color:#999999;
}
&.focused {
    width:200px;
}
&.slide-enter{
    transition:all .2s ease-out;
    width:160px;
}
&.slide-enter-active{
    width:200px;
}
&.slide-exit{
    transition:all .2s ease-out;
}
&.slide-exit-active{
    width:160px;
}
`;

export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,0.2);
background:#fff;
`;

export const SearchInfoTitle = styled.div`
margin:20px 0 15px 0;
line-height:20px;
font-size:14px;
color:#969696;
`;

export const SearchInfoSwitch = styled.span`
font-size:13px;
float:right;
cursor:pointer;
.spin{
    display:inline-block;
    font-size:12px;
    margin-right:6px;
    transition: all .5s ease;
    transform-origin:center center;
}
`;

export const SearchInfoList = styled.div`
overflow:hidden;

`;

export const SearchInfoItem = styled.a.attrs({
    href:'/'
})`
line-height:20px;
float:left;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
display:block;
margin-right:10px;
margin-bottom:15px;
text-decoration:none
`;

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;

export const Button = styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px solid #ec6149;
margin-right:15px;
padding:0 20px;
&.reg{
    color:#ec6149;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`;


