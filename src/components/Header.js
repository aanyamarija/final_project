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

          <Link to="/categories">
          <span>Categories</span>
          </Link>
           
           <Link to="/products/all"> 
           <span>All products</span>
           </Link>
           
           <Link to="/products/sale">
           <span>All sales</span>
           </Link>
       
        </div>

        <Link to="/cart">
        <div className='cart_icon'>
            <img className='cart_img' src={icon_cart}></img>
        </div>
        </Link>
       
    </header>
  )
}

export default Header;
