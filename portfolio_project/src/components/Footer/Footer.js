import React from 'react'
import foot from './footer.module.scss'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className={foot.container}>
      <div className={foot.content}>
        <div className={foot.linx}>
          <h1>FoodLinx</h1>
          {/* <p>Online Food Delivery Software/Application</p> */}
        </div>

        <div className={foot.usefull_links}>
          <h3>Useful Links</h3>
          <div className={foot.links}>
            <a href="#">Add your restaurant</a>
            <a href="#">Restaurants near me</a>
            <a href="#">Register for deliveries</a>
          </div>
        </div>

        <div className={foot.about}>
          <h3>About</h3>
          <div className={foot.links}>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

      </div>
      <div className={foot.copy}>
        <div className={foot.socialIcons}>
          <div className={foot.icon}><BsFacebook /></div>
          <div className={foot.icon}><BsTwitter /></div>
          <div className={foot.icon}><BsInstagram /></div>
        </div>
        <div>© 2023 FoodLinx. All rights reserved.</div>
      </div>
    </div>
  )
}
