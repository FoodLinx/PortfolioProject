"use client"

import React, { useState } from 'react';
// import axios from 'axios';
import styles from './feed.module.scss';
import Image from 'next/image';

const Feed = () => {
  const [restaurantData, setRestaurantData] = useState([
    {
      id: 1,
      name: "Restaurant 1",
      image: "restaurant1.jpg",
      workingHours: "9 AM - 10 PM",
      rating: 4.5,
      menu: [
        { id: 1, name: "Dish 1", price: 10 },
        { id: 2, name: "Dish 2", price: 15 },
        { id: 3, name: "Dish 3", price: 12 },
        { id: 4, name: "Dish 4", price: 8 },
        { id: 5, name: "Dish 5", price: 11 }
      ]
    },
    {
      id: 2,
      name: "Restaurant 2",
      image: "restaurant2.jpg",
      workingHours: "8 AM - 9 PM",
      rating: 4.2,
      menu: [
        { id: 6, name: "Dish 6", price: 14 },
        { id: 7, name: "Dish 7", price: 9 },
        { id: 8, name: "Dish 8", price: 13 },
        { id: 9, name: "Dish 9", price: 16 },
        { id: 10, name: "Dish 10", price: 10 }
      ]
    },
    {
      id: 3,
      name: "Restaurant 3",
      image: "restaurant3.jpg",
      workingHours: "10 AM - 11 PM",
      rating: 4.8,
      menu: [
        { id: 11, name: "Dish 11", price: 12 },
        { id: 12, name: "Dish 12", price: 9 },
        { id: 13, name: "Dish 13", price: 15 },
        { id: 14, name: "Dish 14", price: 11 },
        { id: 15, name: "Dish 15", price: 13 }
      ]
    }
  ]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurantId) => {
    const restaurant = restaurantData.find(restaurant => restaurant.id === restaurantId);
    setSelectedRestaurant(restaurant);
  };

  // useEffect(() => {
  //   // Fetch restaurant data
  //   axios.get('https://api/restaurants')
  //     .then(response => {
  //       setRestaurantData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className={styles.feedContainer}>
      <div className={styles.restaurantContainer}>
        {restaurantData.map(restaurant => (
          <div
            className={`${styles.restaurant} ${selectedRestaurant && selectedRestaurant.id === restaurant.id ? styles.selected : ''}`}
            key={restaurant.id}
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <div>
              <Image src={`/images/${restaurant.image}`} 
              width={200}
              height={250}
              alt={restaurant.name}
               />
            </div>
            <div>
              <div>{restaurant.name}</div>
              <div>{restaurant.workingHours}</div>
              <div>{restaurant.rating}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.menu}>
        {selectedRestaurant && (
          <div className={styles.menu_item}>
            <h2>{selectedRestaurant.name}</h2>
            {selectedRestaurant.menu.map(dish => (
              <div className={styles.dish} key={dish.id}>
                <Image src={`/images/${dish.image}`} alt={dish.name} width={100} height={100} />
                <div className={styles.dishDetails}>
                  <h3>Name: {dish.name}</h3>
                  <p>Price: {dish.price}</p>
                  <button>Order</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
