import React from "react";
import axios from "axios"
import styles from "./page.module.css";
import Orders from "@/src/components/Orders/Orders";

const page = ({ orders }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h4 className={styles.title}>Available orders For Pick Up</h4>
          <div className={styles.orders}>
            {/* Will display a list of meals ready for pickup */}
            <Orders />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

// Create a function that will call the API endpoint.
// @/api/delivery/orders/ready

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/delivery/orders/ready"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }
