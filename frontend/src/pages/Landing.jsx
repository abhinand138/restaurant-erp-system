import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-6">

        <h1 className="text-4xl font-bold text-yellow-400">

          🍽️ Restaurant ERP

        </h1>

        <button

          onClick={() => navigate("/login")}

          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"

        >

          Login

        </button>

      </nav>


      {/* Hero */}

      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight">

            Smart Restaurant

            <span className="text-yellow-400">

              {" "}Management

            </span>

          </h1>


          <p className="text-gray-400 text-xl mt-8">

            A complete ERP system to manage

            tables, menu, orders, billing,

            analytics and staff operations.

          </p>


          <button

            onClick={() => navigate("/login")}

            className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition"

          >

            Get Started →

          </button>

        </div>


        <div>

          <img

            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

            alt="restaurant"

            className="rounded-3xl shadow-2xl"

          />

        </div>

      </div>


      {/* Features */}

      <div className="max-w-7xl mx-auto px-10 pb-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-gray-900 p-8 rounded-2xl">

            🪑

            <h2 className="text-2xl font-bold mt-4">

              Tables

            </h2>

          </div>


          <div className="bg-gray-900 p-8 rounded-2xl">

            🍔

            <h2 className="text-2xl font-bold mt-4">

              Menu

            </h2>

          </div>


          <div className="bg-gray-900 p-8 rounded-2xl">

            📦

            <h2 className="text-2xl font-bold mt-4">

              Orders

            </h2>

          </div>


          <div className="bg-gray-900 p-8 rounded-2xl">

            📈

            <h2 className="text-2xl font-bold mt-4">

              Analytics

            </h2>

          </div>

        </div>

      </div>

      <footer className="border-t border-gray-800 py-8 mt-16">

  <div className="text-center text-gray-400">

    © 2026 Restaurant ERP System

  </div>

  <div className="text-center text-gray-500 mt-2">

    Built using React + Spring Boot + PostgreSQL

  </div>

</footer>

    </div>

  );

}

export default Landing;