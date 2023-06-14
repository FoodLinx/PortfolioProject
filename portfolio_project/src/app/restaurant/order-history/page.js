import React from 'react'
import styles from './page.module.css'
import Orders from '@/src/components/Orders/Orders';
import axios from 'axios';

const OrderHistory = ({ orders }) => {
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Orders Ready For Pick-up</h3>
        </div>
        <div>
          <Orders orders={orders} />
        </div>
      </div>
      </div>
    </>
  );
}

export default OrderHistory

export async function getServerSideProps() {
  const { data } = await axios.get(
    "http://localhost:3000/api/restaurant/order-history"
  );

  return {
    props: {
      orders: data,
    },
  };
}