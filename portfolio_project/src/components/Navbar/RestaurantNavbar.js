import React from "react";
import { AiOutlineMail, AiOutlineLogout } from "react-icons/ai";
import classes from "./restaurantNavbar.module.css";
import Link from "next/link";
// import { signIn, signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";

const RestaurantNavbar = () => {
  // const session = useSession();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href="/" className={classes.left}>
          <h2>FoodLinx</h2>
        </Link>
        {/* These links need to be assigned. */}
        <ul className={classes.center}>
          <li className={classes.listItem}>New-Orders</li>
          <li className={classes.listItem}>Orders-In-Progress</li>
          <li className={classes.listItem}>Order History</li>
          <li className={classes.listItem}>Hours</li>
          <li className={classes.listItem}>Settings</li>
        </ul>
        <div className={classes.right}>
          {/* {session.status !== "authenticated" ? ( */}
            <>
              <AiOutlineMail size={30} />
              {/* Sign in function required */}
              <button className={classes.signIn} onClick={""}>
                Sign In
              </button>
              {/* Sign up function required */}
              <button className={classes.signUp} onClick={""}>Sign Up</button>
            </>
          {/* ) : ( */}
            <>
              {/* Logout function required */}
              <div className={classes.logout} onClick={""}>
                Logout <AiOutlineLogout size={30} />
              </div>
              <Link className={classes.addMeal} href="/addMeal">
                Add Meal
              </Link>
            </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantNavbar;






























// () => signIn()