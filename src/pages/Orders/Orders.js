import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { doc, setDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { useStateValue } from "../../store/StateProvider";
import Order from "../../components/Order";
import Header from "../../components/Header";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrder] = useState([]);

  // useEffect(() => {
  //   async function fetchOrdersForUser(userId) {
  //     if (user) {
  //       const userDocRef = doc(db, "users", user?.uid);
  //       const ordersCollectionRef = collection(userDocRef, "orders");
  //       const querySnapshot = await getDocs(ordersCollectionRef);

  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         console.log(data, "--------------------");
  //         // querySnapshot.forEach((doc) => {
  //         //   docs.push({ id: doc.id, ...doc.data() });
  //         // });
  //         setOrder([
  //           ...orders,
  //           {
  //             id: doc.id,
  //             cart: data.cart,
  //             amount: data.amount,
  //             created: data.created,
  //           },
  //         ]);
  //       });
  //       console.log(orders);
  //     } else {
  //       setOrder([]);
  //     }
  //   }
  //   fetchOrdersForUser();
  // }, [user]);

  useEffect(() => {
    async function fetchOrdersForUser(userId) {
      if (user) {
        const userDocRef = doc(db, "users", userId);
        const ordersCollectionRef = collection(userDocRef, "orders");
        const querySnapshot = await getDocs(ordersCollectionRef);

        const orders = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          orders.push({
            id: doc.id,
            cart: data.cart,
            amount: data.amount,
            created: data.created,
          });
        });

        setOrder(orders);
        console.log(orders);
      } else {
        setOrder([]);
      }
    }
    fetchOrdersForUser(user?.uid);
  }, [user]);

  console.log("ORDERS---->", orders);
  return (
    <div>
      <Header />
      <div className="orders">
        <h2>{orders.length != 0 ? "Your Orders" : "No Orders"}</h2>
        <div className="ordersContainer">
          {orders?.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Orders;
