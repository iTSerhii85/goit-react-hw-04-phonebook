import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(9, 9, 9, 0.51);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.5px);
-webkit-backdrop-filter: blur(5.5px);
`

export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: fit-content;
height: fit-content;
padding: 20px;
border-radius: 5px;
background: rgb(0,0,0);
  background: -moz-linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
  background: -webkit-linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
  background: linear-gradient(320deg, rgba(0,0,0,1) 0%, rgba(0,18,246,1) 100%);
`;

export const CloseModalButton = styled.button`
display: block;
 width: 30px;
 margin-left: auto;
 margin-right: 0;
 margin-bottom: 15px;
 font-size: 18px;
 outline: 0;
 border: 0;
 cursor: pointer;
 will-change: box-shadow,transform;
 background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
 box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
 padding: 0 0.5em;
 border-radius: 100%;
 color: #fff;
 height: 30px;
 text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
 transition: box-shadow 0.15s ease, transform 0.15s ease;

&:hover {
 box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
 transform: translateY(-0.1em);
}

&:active {
 box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
 transform: translateY(0em);
}
`;
