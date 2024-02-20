import React from 'react'
import logo from "./logo.png"
import icon_cart from "./cart.png"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
        <div className='logo'>
            <img className='logo_img' src={logo} alt='' />
        </div>
        <div className='menu'>
          <Link to='/'>
            <span>Main page</span>
          </Link>

           <span>Categories</span>
           <span>All products</span>
           <span>All sales</span>
        </div>
        <div className='cart_icon'>
            <img className='cart_img' src={icon_cart}></img>
        </div>
    </header>
  )
}

export default Header;
