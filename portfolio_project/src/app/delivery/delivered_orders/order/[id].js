import React from "react";
import axios from "axios";
import styles from "./page.styles.css";

const OrderDetails = ({ order }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> {order?.title} </h2>
          <span className={styles.orderId}>
            Order ID: <span> {order?.id} </span>
          </span>
          <span className={styles.date}>
            Date Delivered: <span> {order?.date} </span>
          </span>
          <span className={styles.address}>
            Delivered to Address: <span> {order?.address} </span>
          </span>
          <span className={styles.mealId}>
            Meal ID: <span> {order?.mealId} </span>
          </span>
          <span className={styles.userId}>
            User ID: <span> {order?.userId} </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;

  const { data } = await axios.get(
    `http://localhost:3000/api/delivery/orders/${id}`
  );

  return {
    props: {
      order: data,
    },
  };
}
