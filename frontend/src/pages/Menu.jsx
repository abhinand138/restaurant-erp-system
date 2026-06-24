import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

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


  const getCategoryColor = (category) => {

    if(category === "Starter"){

      return "bg-blue-100 text-blue-700";

    }

    if(category === "Main Course"){

      return "bg-green-100 text-green-700";

    }

    if(category === "Dessert"){

      return "bg-pink-100 text-pink-700";

    }

    return "bg-purple-100 text-purple-700";

  };


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-10">


          <h1 className="text-4xl font-bold mb-8">

            🍔 Menu Management

          </h1>


          <div className="bg-white p-8 rounded-3xl shadow mb-10">


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


              <select

                value={category}

                onChange={(e)=>

                  setCategory(e.target.value)

                }

                className="border p-4 rounded-xl"

              >

                <option value="">

                  Select Category

                </option>


                <option value="Starter">

                  🥗 Starter

                </option>


                <option value="Main Course">

                  🍛 Main Course

                </option>


                <option value="Dessert">

                  🍰 Dessert

                </option>


                <option value="Beverage">

                  🥤 Beverage

                </option>

              </select>

            </div>


            <button

              onClick={saveMenu}

              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"

            >

              {

                editId

                ? "Update Item"

                : "Add Item"

              }

            </button>

          </div>


          <div className="space-y-4">


            {

              menuItems.map((item)=>(

                <div

                  key={item.id}

                  className="bg-white shadow rounded-3xl p-6 flex justify-between items-center hover:shadow-xl transition"

                >


                  <div>

                    <h2 className="text-2xl font-bold">

                      {item.name}

                    </h2>


                    <p className="mt-2 text-xl font-semibold text-green-600">

                      ₹{item.price}

                    </p>


                    <div

                      className={`inline-block px-4 py-2 rounded-full mt-3 font-semibold ${getCategoryColor(item.category)}`}

                    >

                      {item.category}

                    </div>

                  </div>


                  <div className="flex gap-4">


                    <button

                      onClick={()=>

                        editMenu(item)

                      }

                      className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600"

                    >

                      ✏️ Edit

                    </button>


                    <button

                      onClick={()=>

                        deleteMenu(item.id)

                      }

                      className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"

                    >

                      🗑️ Delete

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

          <Footer/>


        </div>

      </div>

    </div>

  );

}

export default Menu;