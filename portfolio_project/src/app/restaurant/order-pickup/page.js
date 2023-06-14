import React from "react";
import styles from "./page.module.css";
import axios from "axios";
import Orders from "@/src/components/Orders/Orders";

const ordersReadyForPickup = ({orders}) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Orders Ready For Pick-up</h3>
        </div>
        <div className={styles.order}>
          <Orders orders={orders} />
        </div>
      </div>
      </div>
    </>
  );
};

export default ordersReadyForPickup;

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/restaurant/order-pickup"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }
