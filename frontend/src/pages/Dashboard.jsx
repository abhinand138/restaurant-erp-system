import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-white shadow p-6">

        <h1 className="text-4xl font-bold">

          Smart Restaurant ERP
        </h1>

      </div>


      <div className="p-10">

        <div className="grid grid-cols-2 gap-6">

          <button

            onClick={() => navigate("/tables")}

            className="bg-blue-600 text-white p-6 rounded-lg text-2xl"

          >

            🪑 Tables

          </button>


          <button

            onClick={() => navigate("/menu")}

            className="bg-green-600 text-white p-6 rounded-lg text-2xl"

          >

            🍔 Menu

          </button>

           <button

           onClick={() => navigate("/orders")}

           className="bg-orange-600 text-white p-6 rounded-lg text-2xl"

         >

         📦 Orders

        </button>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;