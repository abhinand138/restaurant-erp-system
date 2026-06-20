import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const location = useLocation();

  const role = localStorage.getItem("role");


  const logout = () => {

    localStorage.removeItem("role");

    navigate("/login");

  };


  const activeClass = (path) => {

    return location.pathname === path

      ? "bg-blue-600"

      : "hover:bg-blue-600";

  };


  return (

    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">

        🍽️ Restaurant ERP

      </h1>


      <div className="space-y-4">


        <button

          onClick={() => navigate("/dashboard")}

          className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/dashboard")}`}

        >

          🏠 Dashboard

        </button>


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/tables")}

            className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/tables")}`}

          >

            🪑 Tables

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/menu")}

            className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/menu")}`}

          >

            🍔 Menu

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER" ||

          role === "CASHIER") && (

          <button

            onClick={() => navigate("/orders")}

            className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/orders")}`}

          >

            📦 Orders

          </button>

        )}


        {(role === "ADMIN" ||

          role === "CASHIER") && (

          <button

            onClick={() => navigate("/billing")}

            className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/billing")}`}

          >

            🧾 Billing

          </button>

        )}


        {(role === "ADMIN" ||

          role === "MANAGER") && (

          <button

            onClick={() => navigate("/analytics")}

            className={`w-full text-left p-3 rounded transition duration-300 ${activeClass("/analytics")}`}

          >

            📈 Analytics

          </button>

        )}


        <button

          onClick={logout}

          className="w-full text-left p-3 mt-10 bg-red-500 hover:bg-red-600 rounded transition duration-300"

        >

          🚪 Logout

        </button>

      </div>

    </div>

  );

}

export default Sidebar;