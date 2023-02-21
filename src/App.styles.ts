import styled, { createGlobalStyle } from 'styled-components';
import { img1 } from './images/img';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

body {
    background-image: url(${img1.xyz2});
    background-size: cover;
    margin : 0;
    padding : 0 20px;
    display : flex;
    justify-content : center;
}

* {
    box-sizing : border-box;
}

`
;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    color : #fff;
}

.score {
    color: #fff;
    font-size: 2rem;
    margin : 0;
}

h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;


export const LoadingWrapper = styled.div`

.spin-container {
    text-align: center;
    margin-top: 100px;
  }
  .spin {
    border: 3px solid #0d4b9f;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  }
  #loader2 {
    border: 3px solid #e0edff;
    width: 220px;
    height: 220px;
    position: relative;
    top: -216px;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate2 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  }
  #loader3 {
    border: 3px solid #005cdc;
    width: 240px;
    height: 240px;
    position: relative;
    top: -452px;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  }
  #loader4 {
    border: 3px solid #94b6e5;
    width: 260px;
    height: 260px;
    position: relative;
    top: -708px;
    border-left-color: transparent;
    border-right-color: transparent;
    animation: rotate2 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotateZ(-360deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
  @keyframes rotate2 {
    0% {
      transform: rotateZ(360deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
`