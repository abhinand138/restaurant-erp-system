import { useEffect, useState } from "react";

import api from "../services/api";

function Menu() {

  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {

    fetchMenu();

  }, []);


  const fetchMenu = async () => {

    try {

      const response = await api.get("/api/menu");

      setMenuItems(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">

        Menu Management

      </h1>


      <div className="space-y-4">

        {menuItems.map((item) => (

          <div

            key={item.id}

            className="border p-4 rounded shadow"

          >

            <h2 className="text-xl font-bold">

              {item.name}

            </h2>


            <p>

              Price : ₹{item.price}

            </p>


            <p>

              Category : {item.category}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Menu;