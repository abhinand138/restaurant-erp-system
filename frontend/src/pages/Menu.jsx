import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Menu() {

  const [menuItems, setMenuItems] = useState([]);

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);


  useEffect(() => {

    fetchMenu();

  }, []);


  const fetchMenu = async () => {

    try {

      const response = await api.get("/api/menu");

      setMenuItems(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };


  const saveMenu = async () => {

    try {

      if (editId) {

        await api.put(

          `/api/menu/${editId}`,

          {

            name,

            price,

            category

          }

        );

      }

      else {

        await api.post(

          "/api/menu",

          {

            name,

            price,

            category

          }

        );

      }


      setName("");

      setPrice("");

      setCategory("");

      setEditId(null);


      fetchMenu();

    }

    catch (error) {

      console.log(error);

    }

  };


  const editMenu = (item) => {

    setEditId(item.id);

    setName(item.name);

    setPrice(item.price);

    setCategory(item.category);

  };


  const deleteMenu = async (id) => {

    try {

      await api.delete(

        `/api/menu/${id}`

      );


      fetchMenu();

    }

    catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="flex min-h-screen">

      <Sidebar/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-10">


          <h1 className="text-4xl font-bold mb-8">

            🍔 Menu Management

          </h1>


          <div className="bg-white p-6 rounded-2xl shadow mb-10">


            <div className="grid md:grid-cols-3 gap-4">


              <input

                type="text"

                placeholder="Food Name"

                value={name}

                onChange={(e)=>

                  setName(e.target.value)

                }

                className="border p-4 rounded-xl"

              />


              <input

                type="number"

                placeholder="Price"

                value={price}

                onChange={(e)=>

                  setPrice(e.target.value)

                }

                className="border p-4 rounded-xl"

              />


              <input

                type="text"

                placeholder="Category"

                value={category}

                onChange={(e)=>

                  setCategory(e.target.value)

                }

                className="border p-4 rounded-xl"

              />

            </div>


            <button

              onClick={saveMenu}

              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"

            >

              {editId

                ? "Update Item"

                : "Add Item"}

            </button>

          </div>


          <div className="space-y-4">

            {menuItems.map((item)=>(

              <div

                key={item.id}

                className="bg-white shadow rounded-2xl p-6 flex justify-between items-center"

              >


                <div>

                  <h2 className="text-2xl font-bold">

                    {item.name}

                  </h2>


                  <p>

                    ₹{item.price}

                  </p>


                  <p>

                    {item.category}

                  </p>

                </div>


                <div className="flex gap-4">


                  <button

                    onClick={()=>editMenu(item)}

                    className="bg-yellow-500 text-white px-5 py-2 rounded-lg"

                  >

                    ✏️ Edit

                  </button>


                  <button

                    onClick={()=>deleteMenu(item.id)}

                    className="bg-red-500 text-white px-5 py-2 rounded-lg"

                  >

                    🗑️ Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Menu;