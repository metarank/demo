
import styled from 'styled-components';
import { CSS } from '../../variables';
import * as Layout from '../Layout/components'

export const Logo = styled.a`
  margin-right: 50px;
`

export const Icon = styled.img`
  width: 180px;
  top: 0;
  margin-top: -7px;
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
  padding: 100px 0;
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
