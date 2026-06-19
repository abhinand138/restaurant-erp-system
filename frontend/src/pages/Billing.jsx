import { useEffect, useState } from "react";

import api from "../services/api";

function Billing() {

  const [bills, setBills] = useState([]);


  useEffect(() => {

    fetchBills();

  }, []);


  const fetchBills = async () => {

    try {

      const response = await api.get("/api/billing");

      setBills(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">

        Billing Management

      </h1>


      <div className="space-y-4">

        {bills.map((bill) => (

          <div

            key={bill.id}

            className="border p-4 rounded shadow"

          >

            <p>

              Subtotal : ₹{bill.subtotal}

            </p>


            <p>

              GST : ₹{bill.gst}

            </p>


            <p>

              Total : ₹{bill.total}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Billing;