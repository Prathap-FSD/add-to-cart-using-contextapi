import React, { useContext } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import { Context } from './contextApi'

function Nav() {
    let cartItems = useContext(Context)

  return (
    
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand "> <NavLink to="/" className='navBrand'>Context API Task</NavLink> </span>
           <NavLink to="/cart" className='navBtn'> Cart <i className="bi bi-cart-fill "> {cartItems.items.length}</i></NavLink> 
        </div>
      </nav>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  )
}

export default Nav