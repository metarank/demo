
import styled from 'styled-components';
import { CSS } from '../../variables';
import * as Layout from '../Layout/components'

export const Logo = styled.a`
  margin-right: 50px;
  text-align: center;
  @media (max-width: 630px) {
    margin: 0;
  }
`

export const Icon = styled.img`
  width: 180px;
  top: 0;
  margin-top: -7px;
  @media (max-width: 630px) {
    flex-direction: column;
    width: 80%;
    margin-bottom: 30px;
  }
`

export const Description = styled.p`
  line-height: 1.6;
  font-size: 20px;
`

export const Wrapper = styled.header`
  background: #FEF200;
`
export const Container = styled(Layout.Container)`
  display: flex;
  align-items: center;
  padding: 100px 20px;
  @media (max-width: 630px) {
    flex-direction: column;
  }
`

export const Inner = styled.section`
  display: flex;
  align-items: center;
  position: sticky;
  height: auto;
`

export const Note = styled.div`
  font-size: 14px;
`
