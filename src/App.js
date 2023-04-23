import React from 'react'
import { GlobalStyle } from './Styles/GlobalStyles'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'
export const App = () => {
  return (
    <div>
      {' '}
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='*' element={<h1>no found</h1>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
