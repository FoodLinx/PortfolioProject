import React from 'react'
import styles from './page.module.css'

const OrderHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Orders Ready For Pick-up</h3>
        <div className={styles.imgContainer}>
          <Image src={meal?.image} alt="" width="250px" height="250px" />
        </div>
        <div className={styles.mealData}>
          <h4>{meal.title}</h4>
          <span>${meal?.price}</span>
          {/* Ordered meals should have a customer Name associated with them. */}
          <span>{meal?.clientName}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory