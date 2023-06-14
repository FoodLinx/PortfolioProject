"use client"

import Link from "next/link"
import user from './user.module.scss'

// export const metadata = {
//   title: 'FoodLinx',
//   description: 'Online Food Delivery Software/Application',
// }


export default function UserLayout({ children }) {
  return (
    <div className={user.container}>
      <div className={user.navigation}>
          <Link className={user.link} href='/user/profile'>
            <div className={user.Link}>
              Profile
            </div>
          </Link>
          <Link className={user.link} href='/user/orders'>
            <div className={user.Link}>
              Order
            </div>
          </Link>
          <Link className={user.link} href='/user/feed'>
            <div className={user.Link}>
              Feed
            </div>
          </Link>
          <Link className={user.link} href='/user/favourites'>
            <div className={user.Link}>
              Favourites
            </div>
          </Link>
       
      </div>
      <div className={user.children}>
        {children}
      </div>
    </div>
  )
}
