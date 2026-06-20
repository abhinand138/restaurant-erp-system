import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = () => {

    localStorage.removeItem("role");

    navigate("/login");

  };

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


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/tables")}

            className="w-full text-left p-3 hover:bg-gray-700 rounded"

          >

            🪑 Tables

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/menu")}

            className="w-full text-left p-3 hover:bg-gray-700 rounded"

          >

            🍔 Menu

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER" ||

          role === "CASHIER") && (

          <button

            onClick={() => navigate("/orders")}

            className="w-full text-left p-3 hover:bg-gray-700 rounded"

          >

            📦 Orders

          </button>

        )}


        {(role === "ADMIN" ||

          role === "CASHIER") && (

          <button

            onClick={() => navigate("/billing")}

            className="w-full text-left p-3 hover:bg-gray-700 rounded"

          >

            🧾 Billing

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/analytics")}

            className="w-full text-left p-3 hover:bg-gray-700 rounded"

          >

            📈 Analytics

          </button>

        )}


        <button

          onClick={logout}

          className="w-full text-left p-3 mt-10 bg-red-500 hover:bg-red-600 rounded"

        >

          🚪 Logout

        </button>


      </div>

    </div>

  );

}

export default Sidebar;