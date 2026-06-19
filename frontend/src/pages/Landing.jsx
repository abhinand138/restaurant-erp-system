import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto px-10 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-6xl font-bold mb-6">

              Smart Restaurant ERP

            </h1>

            <p className="text-xl text-gray-600 mb-10">

              A complete restaurant management system for managing tables, menu items, orders, billing and analytics.

            </p>

            <button

              onClick={() => navigate("/login")}

              className="bg-black text-white px-8 py-4 rounded-lg text-xl"

            >

              Get Started

            </button>

          </div>


          <div>

            <img

              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

              alt="restaurant"

              className="rounded-xl shadow-lg"

            />

          </div>

        </div>


        <div className="mt-24">

          <h2 className="text-4xl font-bold mb-10 text-center">

            Features

          </h2>


          <div className="grid md:grid-cols-4 gap-6">


            <div className="bg-white p-6 rounded-lg shadow">

              🪑

              <h3 className="font-bold mt-3">

                Tables

              </h3>

            </div>


            <div className="bg-white p-6 rounded-lg shadow">

              🍔

              <h3 className="font-bold mt-3">

                Menu

              </h3>

            </div>


            <div className="bg-white p-6 rounded-lg shadow">

              📦

              <h3 className="font-bold mt-3">

                Orders

              </h3>

            </div>


            <div className="bg-white p-6 rounded-lg shadow">

              🧾

              <h3 className="font-bold mt-3">

                Billing

              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Landing;