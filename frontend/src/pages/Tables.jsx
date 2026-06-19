import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

function Tables() {

  const [tables, setTables] = useState([]);


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


  return (

    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6">

          Restaurant Tables

        </h1>


        <div className="space-y-4">

          {tables.map((table) => (

            <div

              key={table.id}

              className="border p-4 rounded shadow"

            >

              <h2 className="text-xl font-bold">

                {table.tableName}

              </h2>

              <p>

                Capacity : {table.capacity}

              </p>

              <p>

                Status : {table.status}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Tables;