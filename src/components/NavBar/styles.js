import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  border: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 320px;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
align-items: center;
display: inline-flex;
color: #888;
height: 100%;
justify-content: center;
text-decoration: none;
width: 100%;


`
