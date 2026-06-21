import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Analytics() {

  const [revenue, setRevenue] = useState(0);

  const [orderCount, setOrderCount] = useState(0);

  const [menuCount, setMenuCount] = useState(0);

  const [tableCount, setTableCount] = useState(0);


  useEffect(() => {

    fetchAnalytics();

  }, []);


  const fetchAnalytics = async () => {

    try {

      const revenueResponse =

        await api.get(

          "/api/billing/revenue"

        );


      const orderResponse =

        await api.get(

          "/api/orders/count"

        );


      const menuResponse =

        await api.get(

          "/api/menu/count"

        );


      const tableResponse =

        await api.get(

          "/api/tables/count"

        );


      setRevenue(

        revenueResponse.data

      );


      setOrderCount(

        orderResponse.data

      );


      setMenuCount(

        menuResponse.data

      );


      setTableCount(

        tableResponse.data

      );

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <div className="flex min-h-screen">

      <Sidebar/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-10">


          <h1 className="text-4xl font-bold mb-10">

            📈 Analytics Dashboard

          </h1>


          <div className="grid md:grid-cols-2 gap-6">


            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow">

              <h2 className="text-2xl">

                🧾 Revenue

              </h2>


              <p className="text-5xl font-bold mt-4">

                ₹{revenue}

              </p>

            </div>


            <div className="bg-green-600 text-white p-8 rounded-3xl shadow">

              <h2 className="text-2xl">

                📦 Orders

              </h2>


              <p className="text-5xl font-bold mt-4">

                {orderCount}

              </p>

            </div>


            <div className="bg-orange-600 text-white p-8 rounded-3xl shadow">

              <h2 className="text-2xl">

                🍔 Menu Items

              </h2>


              <p className="text-5xl font-bold mt-4">

                {menuCount}

              </p>

            </div>


            <div className="bg-purple-600 text-white p-8 rounded-3xl shadow">

              <h2 className="text-2xl">

                🪑 Tables

              </h2>


              <p className="text-5xl font-bold mt-4">

                {tableCount}

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Analytics;