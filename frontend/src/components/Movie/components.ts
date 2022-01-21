import styled, { keyframes } from "styled-components";


export const Wrap = styled.button`
  width: 25%;
  padding: 0 7px;
  margin-bottom: 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 50%;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`

export const Hover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00ff00;
  opacity: 0;
  transition: opacity .2s ease-in;
  text-transform: uppercase;
  font-size: 12px;
`

const pulseGreen = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.6);
  }
  70% {
    box-shadow: 0 0 0 5px rgba(0, 255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0);
  }
`

const pulseRed = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(241, 40, 6, 0.6);
  }
  70% {
    box-shadow: 0 0 0 5px rgba(241, 40, 6, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(241, 40, 6, 0);
  }
`

const bounce = keyframes`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-20px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`

export const PositionUpdater = styled.div<{ up: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 0 0 rgb(244,157,22);
  color: ${p => p.up ? '#00ff00' : '#f12806'};
  transform: ${p => p.up ? 'none' : 'rotate(180deg)'};
  animation: ${p => p.up ? pulseGreen : pulseRed}  1s ease-in-out infinite;
  svg {
    animation: ${bounce} 2s ease-in-out infinite;
  }
`

export const Info = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: white;
  border-radius: 3px;
  z-index: 2;
  padding: 7px;
  border: none;
  line-height: 0;
  cursor: pointer;
`

export const Container = styled.div`
  padding-bottom: 130%;
  position: relative;
  border-radius: 3px;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  &:hover ${Hover}{
    opacity: 1;
  }
`


export const Explain = styled.div`
  position: absolute;
  left: -5px;
  top: -5px;
  bottom: -5px;
  width: calc(200% + 20px);
  display: none;
  padding-left: 100%;
  border: 5px solid white;
  border-radius: 3px;
  box-sizing: border-box;
  z-index: 4;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  ${Wrap}:nth-child(4n) &{
    left: auto;
    right: -5px;
    padding-left: 0;
    padding-right: 100%;
  }
  @media (max-width: 630px){
    ${Wrap}:nth-child(2n) &{
      left: auto;
      right: -5px;
      padding-left: 0;
      padding-right: 100%;
    }
  }
  ${Info}:focus ~ &, &:hover{
    display: flex;
  }
  & > div{
    background: white;
    padding: 10px;
    padding-left: 20px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    text-align: left;
  }
  h4{
    font-family: 'Orbitron', sans-serif;
    margin: 15px 0 10px 0;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:first-child{
      margin-top: 0;
    }
  }
`

export const Line = styled.div`
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px dashed rgba(0, 0, 0, .3);
  font-size: 12px;
`
