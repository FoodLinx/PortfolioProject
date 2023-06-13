import React from 'react'
import classes from './restaurantFooter.module.css'

const RestaurantFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About FoodLinx</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis eum quas libero aspernatur error nemo qui, laudantium quam totam mollitia animi quibusdam dolor ducimus possimus cumque amet voluptatem repudiandae.</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone +27 81 000 0000</span>
          <span>YouTube: FoodLinx</span>
          <span>GitHub: FoodLinx</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>South Africa</span>
          <span>Current Location: South Africa</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantFooter