import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./catalog.module.css";

const Catalog = ({ meals = [] }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    const filterMeals = () => {
      setFilteredMeals(() => {
        if (activeCategory) {
          if (activeCategory === "all") {
            return meals;
          }
          return [...meals].filter((meal) => meal.category === activeCategory);
        }
      });
    };
    activeCategory && filterMeals();
  }, [activeCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titles}>
          <h5>Pick Something Delicious</h5>
          <h3>Food and Categories</h3>
        </div>
        <div className={styles.categories}>
          <span
            onClick={() => setActiveCategory("all")}
            className={`${styles.category} ${
              activeCategory === "all" ? styles.active : ""
            }`}
          >
            All
          </span>
          <span
            onClick={() => setActiveCategory("breakfast")}
            className={`${styles.category} ${
              activeCategory === "breakfast" ? styles.active : ""
            }`}
          >
            Breakfast
          </span>
          <span
            onClick={() => setActiveCategory("burger")}
            className={`${styles.category} ${
              activeCategory === "burger" ? styles.active : ""
            }`}
          >
            Burger
          </span>
          <span
            onClick={() => setActiveCategory("pizza")}
            className={`${styles.category} ${
              activeCategory === "pizza" ? styles.active : ""
            }`}
          >
            Pizza
          </span>
          <span
            onClick={() => setActiveCategory("beef")}
            className={`${styles.category} ${
              activeCategory === "beef" ? styles.active : ""
            }`}
          >
            Beef
          </span>
          <span
            onClick={() => setActiveCategory("chicken")}
            className={`${styles.category} ${
              activeCategory === "chicken" ? styles.active : ""
            }`}
          >
            Chicken
          </span>
          <span
            onClick={() => setActiveCategory("lamb")}
            className={`${styles.category} ${
              activeCategory === "pork" ? styles.active : ""
            }`}
          >
            Lamb
          </span>
          <span
            onClick={() => setActiveCategory("pork")}
            className={`${styles.category} ${
              activeCategory === "pork" ? styles.active : ""
            }`}
          >
            Pork
          </span>
          <span
            onClick={() => setActiveCategory("pasta")}
            className={`${styles.category} ${
              activeCategory === "pasta" ? styles.active : ""
            }`}
          >
            Pasta
          </span>
          <span
            onClick={() => setActiveCategory("wrap")}
            className={`${styles.category} ${
              activeCategory === "wrap" ? styles.active : ""
            }`}
          >
            Wrap
          </span>
          <span
            onClick={() => setActiveCategory("seafood")}
            className={`${styles.category} ${
              activeCategory === "seafood" ? styles.active : ""
            }`}
          >
            Seafood
          </span>
          <span
            onClick={() => setActiveCategory("vegan")}
            className={`${styles.category} ${
              activeCategory === "vegan" ? styles.active : ""
            }`}
          >
            Vegan
          </span>
          <span
            onClick={() => setActiveCategory("dessert")}
            className={`${styles.category} ${
              activeCategory === "dessert" ? styles.active : ""
            }`}
          >
            Desserts
          </span>
          <span
            onClick={() => setActiveCategory("beer")}
            className={`${styles.category} ${
              activeCategory === "beer" ? styles.active : ""
            }`}
          >
            Beer
          </span>
          <span
            onClick={() => setActiveCategory("drink")}
            className={`${styles.category} ${
              activeCategory === "drink" ? styles.active : ""
            }`}
          >
            Drink
          </span>
          <span
            onClick={() => setActiveCategory("milkshake")}
            className={`${styles.category} ${
              activeCategory === "milkshake" ? styles.active : ""
            }`}
          >
            Milkshakes
          </span>
        </div>
        {filteredMeals?.length > 0 ? (
          <div className={styles.meals}>
            {filteredMeals?.map((meal) => (
              <Link
                href={`/meal/${meal?._id}`}
                key={meal?._id}
                className={styles.meal}
              >
                <div className={styles.imgContainer}>
                  <Image
                    src={meal?.image}
                    alt=""
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className={styles.mealData}>
                  <h4>{meal.title}</h4>
                  <span>${meal?.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <h2 className={styles.noMeal}>
            There are no {activeCategory} meals in stock
          </h2>
        )}
      </div>
    </div>
  );
};

export default Catalog;
