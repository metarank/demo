
import styled from 'styled-components';

export const Item = styled.button<{selected: boolean}>`
  white-space: nowrap;
  border-radius: 15px / 15px;
  padding: 8px 20px;
  margin: 0 5px 10px 5px;
  background: #FEF200;
  color: black;
  text-transform: capitalize;
  border: 1px solid ${p => p.selected ? '#fff' : '#FEF200'};
  box-shadow: 0px 0px 1px 2px ${p => p.selected ? '#fedf00' : '#fff'};
  transition: box-shadow .1s ease-in-out, opacity .1s linear;
  cursor: ${p => p.selected ? 'default' : 'pointer'};
  opacity: ${p => p.selected ? 1 : .8};
  font-weight: 500;
  letter-spacing: 1;
  &:hover{
    opacity: 1;
  }
`

export const Container = styled.div<{expanded: boolean}>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  padding: 3px 0;
  margin-bottom: 50px;
  max-height: ${p => p.expanded ? '600px' : '125px'};
  overflow: hidden;
  transition: max-height .3s linear;
`

export const ShowMore = styled.button`
  width: 100%;
  text-align: center;
  padding: 20px 0 0 0;
  border: none;
  position: absolute;
  bottom: 0;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  background: white;
  letter-spacing: 1px;
`
