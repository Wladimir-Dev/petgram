import React, { useContext } from 'react'
import { GlobalStyle } from './Styles/GlobalStyles'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { PetContext } from './Context/Context'
import { NoFound } from './components/NoFound.js'
import { RegisterMutation } from './components/container/RegisterMutation'
import { LoginMutation } from './components/container/LoginMutation'

export const App = () => {
  const { isAuth } = useContext(PetContext)
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        
        <Routes>
          {!isAuth && <Route path='/' element={<LoginMutation />} />}
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          {!isAuth && <Route path='/login' element={<LoginMutation />} />}
          {!isAuth && <Route path='/favs' element={<LoginMutation />} />}
          {!isAuth && <Route path='/user' element={<LoginMutation />} />}
          <Route path='/favs' element={<Favs />} />
          <Route path='/user' element={<User />} />
          <Route path='/registrar' element={<RegisterMutation />} />
          <Route path='/login' element={<LoginMutation />} />
          <Route path='*' element={<NoFound />} />
        </Routes>

        {isAuth && <NavBar />}
      </BrowserRouter>
    </div>
  )
}
