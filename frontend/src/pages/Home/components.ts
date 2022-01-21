import styled from "styled-components";
import { CSS } from "../../variables";
import * as Layout from '../../components/Layout/components'

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 100px;
  letter-spacing: 1px;
`


export const Description = styled.p`

`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  hr{
    width: 1px;
    border: none;
    background: black;
    margin: 0px 10px;
    display: block;
    height: 20px;
  }
  button{
    text-transform: uppercase;
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    &:before{
      content: ' ';
      position: absolute;
      left: 0;
      width: 0px;
      height: 1px;
      background: black;
      top: 100%;
    }
    &:hover:before{
      transition: width .1s linear;
      width: 100%;
    }
  }
`

export const Note = styled.div`
  margin-bottom: 45px;
  font-size: 16px;
  opacity: .7;
  max-width: 67%;
  @media (max-width: 630px) {
    max-width: 100%;
  }
  p {
    line-height: 1.4;
  }
`

export const Container = styled(Layout.Container)`
  margin-bottom: 20px;
`

export const CompareContainer = styled(Layout.Container)<{ comparing: boolean }>`
  margin-bottom: 100px;
  max-width: ${p => p.comparing ? '100vw' : '960px'};
  display: ${p => p.comparing ? 'flex' : 'block'};
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  padding: 0;
`

export const ItemsList = styled.div<{ comparing: unknown }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: ${p => p.comparing ? '50%' : 'auto'};
`

export const Viewed = styled.div`
  margin-bottom: 50px;
`

export const Divider = styled.div`
  width: 50px;
`

export const CacheItem = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding: 5px 13px;
  border: 1px solid ${CSS["grey-4"]};
  background-color: ${CSS["grey"]};
  border-radius: 6px / 6px;
  color: ${CSS["base"]};
  margin-right: 6px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`
