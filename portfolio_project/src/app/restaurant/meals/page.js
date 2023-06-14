import React from 'react'
import styles from './page.module.css'
import Catalog from '@/src/components/Catalog/Catalog'
import axios from 'axios'

const restaurantItems = ({meals}) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          <Catalog meals={meals} />
        </h2>
      </div>
    </div>
  )
}

export default restaurantItems

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/restaurant/meals"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }