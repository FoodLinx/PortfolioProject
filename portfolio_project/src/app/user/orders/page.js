"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './orders.module.scss';
import Image from 'next/image';

const Orders = () => {
  // const router = useRouter();
  // const { orderId } = router.query;

  const [currentOrder, setCurrentOrder] = useState({
    image: "link to mage",
    orderId: 1,
    restaurant: 'Dummy Restaurant',
    food: 'Dummy Food',
    timeOrdered: '2023-06-13 T 10:30:00',
    price: 25.99,
  });

  const [orderHistory, setOrderHistory] = useState([
    {
      image: "link to mage",
      orderId: 2,
      restaurant: 'Restaurant A',
      food: 'Food A',
      timeOrdered: '2023-06-12 T 18:45:00',
      price: 15.99,
    },
    {
      image: "link to mage",
      orderId: 3,
      restaurant: 'Restaurant B',
      food: 'Food B',
      timeOrdered: '2023-06-11 T 12:15:00',
      price: 12.99,
    },
    {
      image: "link to mage",
      orderId: 4,
      restaurant: 'Restaurant C',
      food: 'Food C',
      timeOrdered: '2023-06-10 T 12:15:00',
      price: 12.99,
    },
    {
      image: "link to mage",
      orderId: 5,
      restaurant: 'Restaurant D',
      food: 'Food D',
      timeOrdered: '2023-06-09 T 12:15:00',
      price: 12.99,
    },
  ]);


  // const [currentOrder, setCurrentOrder] = useState(null);
  // const [orderHistory, setOrderHistory] = useState([]);

  // useEffect(() => {
  //   // Fetch current order and order history from the backend api
  //   const fetchOrderData = async () => {
  //     try {
  //       const currentOrderResponse = await fetch(`api/orders/${orderId}`);
  //       const currentOrderData = await currentOrderResponse.json();
  //       setCurrentOrder(currentOrderData);

  //       const orderHistoryResponse = await fetch('API_ENDPOINT_URL/orders');
  //       const orderHistoryData = await orderHistoryResponse.json();
  //       setOrderHistory(orderHistoryData);
  //     } catch (error) {
  //       console.error('Error fetching order data:', error);
  //     }
  //   };

  //   fetchOrderData();
  // }, [orderId]);

  return (
    <div className={styles.container}>
      {currentOrder && (
        // changed classname style for visibility reasons
        <div className={styles['current-order']}>
          <h1 className={styles['heading']}>Current Order</h1>
          <div className={styles['order-item']}>
            <Image src="" width={200} height={200} alt='food' />
            <h2>Order ID: {currentOrder.orderId}</h2>
            <h3>Restaurant: {currentOrder.restaurant}</h3>
            <p>Food: {currentOrder.food}</p>
            <p>Time Ordered: {currentOrder.timeOrdered}</p>
            <p>Price: {currentOrder.price}$</p>
          </div>
        </div>
      )}

      <div className={styles['order-history']}>
        <h1 className={styles['heading']}>Order History</h1>
        {orderHistory.map((order) => (
          <div key={order.orderId} className={styles['order-item']}>
            <Image src="" width={200} height={200} alt='food' />
            <h3>Order ID: {order.orderId}</h3>
            <p>Restaurant: {order.restaurant}</p>
            <p>Food: {order.food}</p>
            <p>Time Ordered: {order.timeOrdered}</p>
            <p>Price: {order.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
