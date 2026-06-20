import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

function Analytics() {

  return (

  <div className="flex min-h-screen">

    <Sidebar/>

    <div className="flex-1">

      <Navbar/>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-10">

          Analytics Dashboard

        </h1>


        <div className="grid grid-cols-2 gap-6">


          <div className="bg-blue-500 text-white p-8 rounded-lg shadow">

            <h2 className="text-2xl">

              🧾 Revenue

            </h2>

            <p className="text-5xl font-bold mt-4">

              ₹5400

            </p>

          </div>


          <div className="bg-green-500 text-white p-8 rounded-lg shadow">

            <h2 className="text-2xl">

              📦 Orders Today

            </h2>

            <p className="text-5xl font-bold mt-4">

              18

            </p>

          </div>


          <div className="bg-orange-500 text-white p-8 rounded-lg shadow">

            <h2 className="text-2xl">

              🍔 Popular Food

            </h2>

            <p className="text-3xl font-bold mt-4">

              Biriyani

            </p>

          </div>


          <div className="bg-purple-500 text-white p-8 rounded-lg shadow">

            <h2 className="text-2xl">

              🪑 Available Tables

            </h2>

            <p className="text-5xl font-bold mt-4">

              8

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

);

}

export default Analytics;