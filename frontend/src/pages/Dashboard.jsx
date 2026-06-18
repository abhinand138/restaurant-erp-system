import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-10">

        Restaurant ERP Dashboard

      </h1>


      <button

        className="bg-blue-600 text-white px-6 py-3 rounded"

        onClick={() => navigate("/tables")}

      >

        Manage Tables

      </button>

    </div>

  );

}

export default Dashboard;