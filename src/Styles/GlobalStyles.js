import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
*, *::after,*::before{
    box-sizing: inherit;
}
ul,li,h1,h2,h3,p,button{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
button{
    background-color: transparent;
    border: 0;
    outline: 0;
}
body{
    background-color: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 320px;
    overscroll-behavior: none;
    width: 100%;
}
#app{
    box-shadow: 0 0 10px rgba(0,0,0,.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    width: 100%;
}
`
