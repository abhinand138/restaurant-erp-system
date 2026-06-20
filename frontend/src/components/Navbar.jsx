function Navbar() {

  const role = localStorage.getItem("role");

  return (

    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold">

          🍽️ Restaurant ERP

        </h1>

      </div>


      <div className="flex items-center gap-4">

        <div className="text-gray-500">

          Logged in as

        </div>


        <div className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold">

          {role}

        </div>

      </div>

    </div>

  );

}

export default Navbar;