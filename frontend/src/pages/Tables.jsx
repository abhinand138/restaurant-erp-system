import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Tables() {

  const [tables, setTables] = useState([]);

  const [tableName, setTableName] = useState("");

  const [capacity, setCapacity] = useState("");

  const [status, setStatus] = useState("");

  const [editId, setEditId] = useState(null);


  useEffect(() => {

    fetchTables();

  }, []);


  const fetchTables = async () => {

    try {

      const response = await api.get("/api/tables");

      setTables(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const saveTable = async () => {

    try {

      if(editId){

        await api.put(

          `/api/tables/${editId}`,

          {

            tableName,

            capacity,

            status

          }

        );

      }

      else{

        await api.post(

          "/api/tables",

          {

            tableName,

            capacity,

            status

          }

        );

      }


      setTableName("");

      setCapacity("");

      setStatus("");

      setEditId(null);


      fetchTables();

    }

    catch(error){

      console.log(error);

    }

  };


  const editTable = (table) => {

    setEditId(table.id);

    setTableName(table.tableName);

    setCapacity(table.capacity);

    setStatus(table.status);

  };


  const deleteTable = async (id) => {

    try{

      await api.delete(

        `/api/tables/${id}`

      );


      fetchTables();

    }

    catch(error){

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

            🪑 Table Management

          </h1>


          <div className="bg-white p-6 rounded-2xl shadow mb-10">


            <div className="grid md:grid-cols-3 gap-4">


              <input

                type="text"

                placeholder="Table Name"

                value={tableName}

                onChange={(e)=>

                  setTableName(e.target.value)

                }

                className="border p-4 rounded-xl"

              />


              <input

                type="number"

                placeholder="Capacity"

                value={capacity}

                onChange={(e)=>

                  setCapacity(e.target.value)

                }

                className="border p-4 rounded-xl"

              />


              <input

                type="text"

                placeholder="Status"

                value={status}

                onChange={(e)=>

                  setStatus(e.target.value)

                }

                className="border p-4 rounded-xl"

              />

            </div>


            <button

              onClick={saveTable}

              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"

            >

              {editId

                ? "Update Table"

                : "Add Table"}

            </button>

          </div>


          <div className="space-y-4">

            {tables.map((table)=>(

              <div

                key={table.id}

                className="bg-white shadow rounded-2xl p-6 flex justify-between items-center"

              >


                <div>

                  <h2 className="text-2xl font-bold">

                    {table.tableName}

                  </h2>


                  <p>

                    Capacity : {table.capacity}

                  </p>


                  <p>

                    Status : {table.status}

                  </p>

                </div>


                <div className="flex gap-4">


                  <button

                    onClick={()=>editTable(table)}

                    className="bg-yellow-500 text-white px-5 py-2 rounded-lg"

                  >

                    ✏️ Edit

                  </button>


                  <button

                    onClick={()=>deleteTable(table.id)}

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

export default Tables;