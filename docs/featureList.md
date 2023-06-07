# Feature List

- Production hosting on [vercel](https://vercel.com/)
- MongoDB database
- Redis Cache on [RedisLabs](https://redis.com/try-free/)
- Domain models
- Routes
- Controller
- Secrets

## Customer features

| Title | Description | Elements / Components |
| ----- | ----------- | -------- |
| User (Customer)| | |
| Register User | Before a user can make a purchase they must have an account | UI, Auth0, OAuth |
| Login | Users with accounts should be be able to login using their account credentials, this should return a json web token | UI, OAuth, MongoDB, Redis |
| Browse menus | Users should be able to retrieve a list of menu items (based on filters) | UI, MongoDB, next cache |
| Add to Cart (and count) | Users should be able to add menu items to a cart before completing an order | UI, Redis |
| Remove item from cart | Remove menu item from cart | UI, Redis |
| Checkout | From the cart the user can place the order which by procedding to the payment page | UI, Redis, MongoDB |
| Make payment | User will be able to select their payment option (This will be faked) | UI, MongoDB |
| Track order | Users will be able to obtain sms/email notifications on the status of their order (Waiting to be collected, out for delivery ( with time estimate, driver details, delivery address, secret pin), delivered / or undelivered), Order location (google maps) | UI, MongoDB, Redis |
| View order history | User will be able to view the history of their orders (All orders & specific order) | UI, MongoDB |
| Review menu items | User will be able to submit menu item reviews | UI, MongoDB |
| Logout | Users with accounts should be be able to logout of their account | UI, OAuth, MongoDB, Redis |
| Delete Account | User should be able to delelete their accounts and all related data | UI, OAuth, MongoDB, Redis |

## Resturant features

| Title | Description | Elements / Components |
| ----- | ----------- | -------- |
|Resturant |||
| Sign up Resturant | A resturant will be required to sign up for an account | UI, MongoDB, Redis |
| Login | Users with accounts should be be able to login using their account credentials, this should return a json web token | UI, OAuth, MongoDB, Redis |
| Check verification status | Before a restuarant can start selling on the platform it must be verified to do so | UI MongoDB |
| Add menu items | A verified resturant may start uploading menu items (or menus "items sold as a unit") and set the images and prices | UI, MongoDB |
| View menu items | View menu items uploaded by a verified restaurant | UI, MongoDB |
| Edit, Delete | Resturants will be able to edit menu item details or remove items from menus | UI, MongoDB |
| View menu item reviews | View menu item reviews submitted by a users | UI, MongoDB |
| Process Order | All unfilfiled but paid new orders will be listed for processing by the resturant and have their status of the order changed to waiting for collection when processed | UI, MongoDB |
| View Fulfiled Orders | Check the status of fulfilled orders (delivered, out on delivery, undelivered) | UI, MongDB |
| Logout | Users with accounts should be be able to logout of their account | UI, OAuth, MongoDB, Redis cache |
