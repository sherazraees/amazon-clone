Amazon Clone
============

This is a React project that is a clone of the Amazon website. The app uses Firebase for authentication, cart functionality, and database, Redux for state management, Stripe for payment integration, and Cloud Functions for serverless functionality. The app is deployed on Firebase Hosting and can be accessed using this [link](https://clone-1a7ae.web.app/).

Technologies Used
-----------------

-   React
-   Firebase
-   Redux
-   Stripe
-   Cloud Functions

Functionalities
---------------

-   User Authentication: The app allows users to sign up, sign in, and sign out using Firebase authentication. The app also has a password reset feature.

-   Cart Functionality: The app allows users to add products to their cart, remove products from their cart, and update the quantity of products in their cart. The app also displays the total price of the products in the cart.

-   Database: The app uses Firebase's Firestore database to store user information, product information, and cart information.

-   State Management: The app uses Redux for state management. The app's state includes user information, product information, cart information, and payment information.

-   Payment Integration: The app uses Stripe for payment integration. The app allows users to make payments using their credit or debit cards.

-   Orders History: The app allows users to view their order history. The app displays the date, time, and total price of each order.

-   Cloud Functions: The app uses Firebase's Cloud Functions for serverless functionality.

Installation
------------

To install the app, first clone the repository:

bashCopy code

`git clone https://github.com/sherazraees/amazon-clone.git`

Then install the dependencies:

bashCopy code

`cd amazon-clone
npm install`

Stripe Integration and Cloud Functions
--------------------------------------

The Amazon clone project integrates with Stripe for payment processing, using a publishable key in the frontend and a secret key in the backend. To securely process payments, a cloud function is created using Firebase cloud functions, which is triggered by a request from the frontend and returns a response indicating whether the payment was successful or not. The Stripe secret key is not exposed in the frontend code or the Firebase cloud function code for security reasons. Instead, a separate backend API is used to fetch the Stripe secret key from the Stripe account and return it to the cloud function. This setup ensures that payment transactions are processed securely and efficiently.

bashCopy code

`cd functions
firebase deploy --only functions`

Usage
-----

Once the app is running, you will be able to browse products, add products to your cart, and make payments using Stripe.

Contributing
------------

Contributions to this project are welcome. To contribute, fork the repository and create a pull request.

License
-------

This project is licensed under the MIT license.
