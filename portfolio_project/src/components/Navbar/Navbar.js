"use client"

import React from 'react'
import nav from './navbar.module.scss'
import Link from 'next/link'
import { ImCart } from 'react-icons/im'

export const Navbar = () => {
  return (
    <div className={nav.navbar}>
      <div className={nav.logo}>
        <Link href='/'>
          FoodLinx
        </Link>
      </div>
      <div className={nav.link}>
        <div className={nav.links}>
          <Link 
          href='/'
          >
            Home
          </Link>
          <Link 
          href='/about'
          >
            About Us
          </Link>
          <Link 
          href='/contact'
          >
            Contact
          </Link>
        </div>
        <div className={nav.login_cart}>
          <button className={nav.login}>Login</button>
          <div className={nav.cart}>
            <ImCart />
          </div>
        </div>
      </div>
    </div>
  )
}
