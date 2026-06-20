import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

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


  return (

<div className="flex min-h-screen bg-gray-100">

<Sidebar/>

<div className="flex-1">

<Navbar/>


<div className="p-10">


<div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-3xl p-10 mb-10 shadow-xl">

<h1 className="text-5xl font-bold">

Welcome Back 👋

</h1>


<p className="text-xl mt-4 text-blue-100">

Manage your restaurant efficiently.

</p>


<div className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-bold">

{localStorage.getItem("role")}

</div>

</div>



<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


<div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

<div className="text-5xl">

🪑

</div>


<h2 className="text-2xl font-bold mt-4">

Tables

</h2>


<p className="text-5xl font-bold text-blue-600 mt-4">

{tableCount}

</p>

</div>



<div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

<div className="text-5xl">

🍔

</div>


<h2 className="text-2xl font-bold mt-4">

Menu

</h2>


<p className="text-5xl font-bold text-green-600 mt-4">

{menuCount}

</p>

</div>



<div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

<div className="text-5xl">

📦

</div>


<h2 className="text-2xl font-bold mt-4">

Orders

</h2>


<p className="text-5xl font-bold text-orange-600 mt-4">

{orderCount}

</p>

</div>



<div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

<div className="text-5xl">

🧾

</div>


<h2 className="text-2xl font-bold mt-4">

Revenue

</h2>


<p className="text-4xl font-bold text-purple-600 mt-4">

₹{revenue}

</p>

</div>

</div>



<div className="mt-12">

<h2 className="text-3xl font-bold mb-6">

Quick Actions

</h2>


<div className="grid md:grid-cols-4 gap-6">


<button

onClick={()=>navigate("/tables")}

className="bg-blue-600 text-white p-6 rounded-2xl hover:scale-105 transition"

>

🪑 Manage Tables

</button>



<button

onClick={()=>navigate("/menu")}

className="bg-green-600 text-white p-6 rounded-2xl hover:scale-105 transition"

>

🍔 Manage Menu

</button>



<button

onClick={()=>navigate("/orders")}

className="bg-orange-600 text-white p-6 rounded-2xl hover:scale-105 transition"

>

📦 Manage Orders

</button>



<button

onClick={()=>navigate("/billing")}

className="bg-purple-600 text-white p-6 rounded-2xl hover:scale-105 transition"

>

🧾 Manage Billing

</button>

</div>

</div>


</div>

</div>

</div>

);

}

export default Dashboard;