import styled from "styled-components";
import { CSS } from "../../variables";
export const Title = styled.h1`

`

export const SubTitle = styled.h2`

`

export const Description = styled.p`

`

export const Container = styled.div`
margin-bottom: 100px;

`
export const ItemsList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -7px;
`

export const Viewed = styled.div`
  margin-bottom: 50px;
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
