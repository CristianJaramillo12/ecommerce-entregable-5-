import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// importacion del css del menu
import './../../pages/styles/header.css'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='box_header'>
      <div className='box_header_container1'>
        <h1 className='box_header_title1'>
          <Link className='box_header_title' to='/'>e-commerce</Link>
        </h1>
      </div>

      <nav className='box_header_container2'>
        <ul className='box_nav_ul'>
          <li className={`box_nav_menu ${isOpen && "open"}`}>
            <Link className='nav_menu_title' to='/user/login'><i className='bx bx-log-in'></i></Link>
          </li>
          <li className='box_nav_menu'>
            <Link className='nav_menu_title' to='/purchases'><i className='bx bx-purchase-tag-alt'></i></Link>
          </li>
          <li className='box_nav_menu'>
            <Link className='nav_menu_title' to='/cart'><i className='bx bx-cart'></i></Link>
          </li>
        </ul>
      </nav>

      <div className={`nav_toggle ${isOpen && "open"}`} onClick={handleOpen}>
        <i className='bx bx-menu'></i>
      </div>
    </header>
  )
}

export default Header