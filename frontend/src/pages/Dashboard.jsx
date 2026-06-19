import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8">

          Dashboard
        </h1>


        <div className="grid grid-cols-2 gap-6">

          <div className="bg-blue-500 text-white p-6 rounded">

            Tables Module

          </div>


          <div className="bg-green-500 text-white p-6 rounded">

            Menu Module

          </div>


          <div className="bg-orange-500 text-white p-6 rounded">

            Orders Module

          </div>


          <div className="bg-purple-500 text-white p-6 rounded">

            Billing Module

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;