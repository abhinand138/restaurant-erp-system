import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (

    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">

        Restaurant ERP

      </h1>


      <div className="space-y-4">

        <button

          onClick={() => navigate("/dashboard")}

          className="w-full text-left p-3 hover:bg-gray-700 rounded"

        >

          🏠 Dashboard

        </button>


        <button

          onClick={() => navigate("/tables")}

          className="w-full text-left p-3 hover:bg-gray-700 rounded"

        >

          🪑 Tables

        </button>


        <button

          onClick={() => navigate("/menu")}

          className="w-full text-left p-3 hover:bg-gray-700 rounded"

        >

          🍔 Menu

        </button>


        <button

          onClick={() => navigate("/orders")}

          className="w-full text-left p-3 hover:bg-gray-700 rounded"

        >

          📦 Orders

        </button>


        <button

          onClick={() => navigate("/billing")}

          className="w-full text-left p-3 hover:bg-gray-700 rounded"

        >

          🧾 Billing

        </button>

      </div>

    </div>

  );

}

export default Sidebar;