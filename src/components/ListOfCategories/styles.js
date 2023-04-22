import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-x: auto;
  width: 100%;
  list-style: none;
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    position: fixed;
    padding: 5px;
    margin: 0 auto;
    max-width: 400px;
    left: 0;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
`
export const Item = styled.li`
  padding: 0 8px;
`
