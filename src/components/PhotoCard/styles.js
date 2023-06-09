import styled from 'styled-components'
import { fadeIn } from '../../Styles/animation'

export const ImgWrapper = styled.div`
  ${fadeIn()}
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  object-fit: cover;
  top: 0;
  width: 100%;
`

export const Article = styled.article`
  min-height: 200px;
`
