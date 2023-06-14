"use client"

import React from "react";
import styles from "./page.module.css";
import Orders from "@/src/components/Orders/Orders";
import axios from "axios";

const NewOrders = ({ orders }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>New Orders</h2>
          </div>
          <div>
            <Orders orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOrders;

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/restaurant/new-orders"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }
