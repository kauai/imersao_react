import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
    border: 16px solid #e3e3e3;
    border-top: 16px solid #c5c5c5;
    border-radius: 50%;
    margin: auto;
    width: 80px;
    height: 80px;
    -webkit-animation: ${rotate} 1.2s linear infinite;
    -o-animation: ${rotate} 1.2s linear infinite;
    animation: ${rotate} 1.2s linear infinite;
`;

const AjaxLoad = styled.div`
    display:flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index:999;
`;

const AjaxLoadBox = styled.div`
    margin: auto;
    text-align: center;
    color: #fff;
    font-weight:'bold';
    text-shadow: 1px 1px 1px rgba(0,0,0,.5);
`;

const Load = () => (
  <AjaxLoad>
    <AjaxLoadBox>
      <Rotate />
    </AjaxLoadBox>
  </AjaxLoad>
);

export default Load;
