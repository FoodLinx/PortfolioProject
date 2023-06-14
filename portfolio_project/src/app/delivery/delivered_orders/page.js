import React from 'react'
import axios from 'axios'
import Orders from '@/src/components/Orders/Orders';

const DeliveredOrders = ({ orders }) => {
  return (
    <>
      <div>
        <div>
          <h3 className={styles.title}>Your Delivery History</h3>
          {/* Shows a list of orders delivered. */}
          <Orders orders={orders} />
        </div>
      </div>
    </>
  );
}

export default DeliveredOrders

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/delivery/orders/delivered"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }