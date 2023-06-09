import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin-bottom: 22px;
  list-style: none;
  ${(props) =>
    props.fixed &&
    css`
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
      transform: scale(0.5);
      z-index: 1;
    `}
`
export const Item = styled.li`
  padding: 0 8px;
`
