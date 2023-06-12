import React from 'react'
import styles from './restaurantItems.module.css'

const restaurantItems = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Your Meals
        </h2>
        
      </div>
    </div>
  )
}

export default restaurantItems