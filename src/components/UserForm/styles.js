import styled from 'styled-components'
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
& svg{
  margin-top: calc(100% - 10px);
}`
export const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.8;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
`
export const Span = styled.span`
  text-align: center;
  width: 100%;
  display: inline-block;
`
export const Enlace = styled.b`
  cursor: pointer;
`
