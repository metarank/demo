import styled, { createGlobalStyle } from 'styled-components';
import { CSS } from '../../variables';

export const Global = createGlobalStyle`
  html, body{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${CSS.base};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`
