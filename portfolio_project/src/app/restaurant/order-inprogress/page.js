import React from "react";
import styles from "./page.module.css";
import axios from "axios";
import Orders from "@/src/components/Orders/Orders";

const OrdersInProgress = ({ orders }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>Current orders in progress</h2>
          </div>
          <div className={styles.orders}>
            <Orders orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersInProgress;

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/restaurant/order-inprogress"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }
