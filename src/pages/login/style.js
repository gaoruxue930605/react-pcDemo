import styled from 'styled-components';

export const LoginWrapper = styled.div`
position:absolute;
left:0;
right:0;
bottom:0;
top:56px;
background:#eee;
z-index:10;
`;
export const LoginBox = styled.div`
width:400px;
height:170px;
padding:30px 0px;
background:#fff;
margin:200px auto;
box-shadow:0 0 8px rgba(0,0,0,.1);
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
`;
export const Input = styled.input`
width:200px;
height:30px;
padding:0 10px;
color:#777;
outline:none;
`;
export const Button = styled.div`
width:220px;
height:30px;
color:#fff;
background:#3194d0;
border-radius:15px;
margin:10px auto;
display:flex;
justify-content:space-around;
align-items:center;
`;