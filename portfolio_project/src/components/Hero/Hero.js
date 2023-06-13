import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import restaurantOne from "../../../public/Restaurant/pexels-waldemar-2290070.jpg";

const RestaurantText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Register your business<br />and watch it grow.
          </h2>
          <h5>
            We can help you with the experience by connecting you
            <br /> to a thousand users. <br /> 
          </h5>
          <div className={classes.buttons}>
            <button className={classes.orderNow}></button>
            <button className={classes.seeMore}>See More</button>
          </div>
          <div className={classes.disclaimer}>Free Registrations</div>
        </div>
        <div className={classes.right}>
          <Image src={restaurantOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantText;