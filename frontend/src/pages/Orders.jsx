import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import api from "../services/api";

function Orders() {

  const [orders, setOrders] = useState([]);

  const [menuItems, setMenuItems] = useState([]);

  const [tables, setTables] = useState([]);

  const [foodName, setFoodName] = useState("");

  const [tableName, setTableName] = useState("");

  const [quantity, setQuantity] = useState("");

  const [status, setStatus] = useState("");

  const [editId, setEditId] = useState(null);


  useEffect(() => {

    fetchOrders();

    fetchMenu();

    fetchTables();

  }, []);


  const fetchOrders = async () => {

    try {

      const response = await api.get(

        "/api/orders"

      );

      setOrders(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const fetchMenu = async () => {

    try {

      const response = await api.get(

        "/api/menu"

      );

      setMenuItems(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const fetchTables = async () => {

    try {

      const response = await api.get(

        "/api/tables"

      );

      setTables(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const saveOrder = async () => {

    try{

      if(editId){

        await api.put(

          `/api/orders/${editId}`,

          {

            foodName,

            tableName,

            quantity,

            status

          }

        );

      }

      else{

        await api.post(

          "/api/orders",

          {

            foodName,

            tableName,

            quantity,

            status

          }

        );

      }


      setFoodName("");

      setTableName("");

      setQuantity("");

      setStatus("");

      setEditId(null);


      fetchOrders();

    }

    catch(error){

      console.log(error);

    }

  };


  const editOrder = (order) => {

    setEditId(order.id);

    setFoodName(order.foodName);

    setTableName(order.tableName);

    setQuantity(order.quantity);

    setStatus(order.status);

  };


  const deleteOrder = async (id) => {

    try{

      await api.delete(

        `/api/orders/${id}`

      );


      fetchOrders();

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-10">


          <h1 className="text-4xl font-bold mb-8">

            📦 Order Management

          </h1>


          <div className="bg-white p-6 rounded-3xl shadow mb-10">


            <div className="grid md:grid-cols-4 gap-4">


              <select

                value={foodName}

                onChange={(e)=>

                  setFoodName(e.target.value)

                }

                className="border p-4 rounded-xl"

              >

                <option value="">

                  Select Food

                </option>


                {menuItems.map((item)=>(

                  <option

                    key={item.id}

                    value={item.name}

                  >

                    {item.name}

                  </option>

                ))}

              </select>


              <select

                value={tableName}

                onChange={(e)=>

                  setTableName(e.target.value)

                }

                className="border p-4 rounded-xl"

              >

                <option value="">

                  Select Table

                </option>


                {tables.map((table)=>(

                  <option

                    key={table.id}

                    value={table.tableName}

                  >

                    {table.tableName}

                  </option>

                ))}

              </select>


              <input

                type="number"

                placeholder="Quantity"

                value={quantity}

                onChange={(e)=>

                  setQuantity(e.target.value)

                }

                className="border p-4 rounded-xl"

              />


              <select

                value={status}

                onChange={(e)=>

                  setStatus(e.target.value)

                }

                className="border p-4 rounded-xl"

              >

                <option value="">

                  Select Status

                </option>


                <option value="Preparing">

                  Preparing

                </option>


                <option value="Ready">

                  Ready

                </option>


                <option value="Served">

                  Served

                </option>

              </select>

            </div>


            <button

              onClick={saveOrder}

              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"

            >

              {editId

                ? "Update Order"

                : "Add Order"}

            </button>

          </div>


          <div className="space-y-4">


            {orders.map((order)=>(

              <div

                key={order.id}

                className="bg-white shadow rounded-3xl p-6 flex justify-between items-center"

              >


                <div>

                  <h2 className="text-2xl font-bold">

                    {order.foodName}

                  </h2>


                  <p>

                    🪑 Table : {order.tableName}

                  </p>


                  <p>

                    📦 Quantity : {order.quantity}

                  </p>


                  <p>

                    🚚 Status : {order.status}

                  </p>

                </div>


                <div className="flex gap-4">


                  <button

                    onClick={()=>editOrder(order)}

                    className="bg-yellow-500 text-white px-5 py-2 rounded-lg"

                  >

                    ✏️ Edit

                  </button>


                  <button

                    onClick={()=>deleteOrder(order.id)}

                    className="bg-red-500 text-white px-5 py-2 rounded-lg"

                  >

                    🗑️ Delete

                  </button>

                </div>

              </div>

            ))}

          </div>

          <Footer/>


        </div>

      </div>

    </div>

  );

}

export default Orders;