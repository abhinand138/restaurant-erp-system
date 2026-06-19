import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

function Orders() {

  const [orders, setOrders] = useState([]);


  useEffect(() => {

    fetchOrders();

  }, []);


  const fetchOrders = async () => {

    try {

      const response = await api.get("/api/orders");

      setOrders(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6">

          Orders Management

        </h1>


        <div className="space-y-4">

          {orders.map((order) => (

            <div

              key={order.id}

              className="border p-4 rounded shadow"

            >

              <h2 className="text-xl font-bold">

                {order.foodName}

              </h2>

              <p>

                Table : {order.tableName}

              </p>

              <p>

                Quantity : {order.quantity}

              </p>

              <p>

                Status : {order.status}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Orders;