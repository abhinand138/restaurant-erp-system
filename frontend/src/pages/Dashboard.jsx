import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

function Dashboard() {

  const [tableCount,setTableCount]=useState(0);

  const [menuCount,setMenuCount]=useState(0);

  const [orderCount,setOrderCount]=useState(0);

  const [revenue,setRevenue]=useState(0);


  useEffect(()=>{

    fetchDashboard();

  },[]);


  const fetchDashboard=async()=>{

    try{

      const table=await api.get("/api/tables/count");

      const menu=await api.get("/api/menu/count");

      const order=await api.get("/api/orders/count");

      const bill=await api.get("/api/billing/revenue");


      setTableCount(table.data);

      setMenuCount(menu.data);

      setOrderCount(order.data);

      setRevenue(bill.data);

    }

    catch(error){

      console.log(error);

    }

  };


  return(

    <div className="flex min-h-screen">

      <Sidebar/>

      <div className="flex-1 p-10 bg-gray-100">

        <h1 className="text-4xl font-bold mb-10">

          Dashboard

        </h1>


        <div className="grid grid-cols-2 gap-6">


          <div className="bg-blue-500 text-white p-8 rounded-lg shadow">

            <h2>🪑 Tables</h2>

            <p className="text-5xl font-bold">

              {tableCount}

            </p>

          </div>


          <div className="bg-green-500 text-white p-8 rounded-lg shadow">

            <h2>🍔 Menu Items</h2>

            <p className="text-5xl font-bold">

              {menuCount}

            </p>

          </div>


          <div className="bg-orange-500 text-white p-8 rounded-lg shadow">

            <h2>📦 Orders</h2>

            <p className="text-5xl font-bold">

              {orderCount}

            </p>

          </div>


          <div className="bg-purple-500 text-white p-8 rounded-lg shadow">

            <h2>🧾 Revenue</h2>

            <p className="text-5xl font-bold">

              ₹{revenue}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;