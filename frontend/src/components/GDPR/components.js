import styled from "styled-components";


export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 15px 20px;
  border-radius: 15px / 15px;
  background: #FEF200;
  width: calc(100vw - 20px);
  max-width: 300px;
  box-shadow: 0px 0px 0px 2px white;
  p{
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1.2;
  }
  button{
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    border: 0;
    background: #FEF200;
    box-shadow: 0px 0px 0px 2px white;
    border-radius: 50%;
    cursor: pointer;
  }
`

