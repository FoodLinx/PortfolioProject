"use client"

import React from 'react'
import styles from './page.module.css'
import axios from 'axios'

const RestaurantSettings = ({ restaurant }) => {
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h3>Account Settings</h3>
          </div>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </>
  )
}

export default RestaurantSettings

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     `http://localhost:3000/api/restaurant/${id}/settings`
//   );

//   return {
//     props: {
//       restaurant: data,
//     },
//   };
// }