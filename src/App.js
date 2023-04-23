import React from 'react'
import { GlobalStyle } from './Styles/GlobalStyles'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Details'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NoRegisteruser } from './pages/NoRegisterUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='*' element={<h1>no found</h1>} />
        </Routes>
        <UserLogged>
          {({ isAuth }) =>
            isAuth ? (
              <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
            ) : (
              <Routes>
                <Route path='/user' element={<NoRegisteruser />} />
                <Route path='/favs' element={<NoRegisteruser />} />
              </Routes>
            )
          }
        </UserLogged>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
