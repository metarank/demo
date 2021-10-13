import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  padding: 0 20px;
  margin: 0 auto;
`
