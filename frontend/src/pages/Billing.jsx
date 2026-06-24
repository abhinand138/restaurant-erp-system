import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import api from "../services/api";

import jsPDF from "jspdf";

function Billing() {

  const [bills, setBills] = useState([]);

  const [orders, setOrders] = useState([]);

  const [menuItems, setMenuItems] = useState([]);

  const [selectedOrder, setSelectedOrder] = useState("");


  useEffect(() => {

    fetchBills();

    fetchOrders();

    fetchMenu();

  }, []);


  const fetchBills = async () => {

    try {

      const response =

      await api.get("/api/billing");

      setBills(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const fetchOrders = async () => {

    try {

      const response =

      await api.get("/api/orders");

      setOrders(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const fetchMenu = async () => {

    try {

      const response =

      await api.get("/api/menu");

      setMenuItems(response.data);

    }

    catch(error){

      console.log(error);

    }

  };


  const generateBill = async () => {

    try{

      if(!selectedOrder){

        alert("Select an order");

        return;

      }


      const order = orders.find(

        o => o.id === Number(selectedOrder)

      );


      const menu = menuItems.find(

        m => m.name === order.foodName

      );


      if(!menu){

        alert("Food not found");

        return;

      }


      const subtotal =

        menu.price * order.quantity;


      const gst =

        subtotal * 0.05;


      const total =

        subtotal + gst;


      await api.post(

        "/api/billing",

        {

          foodName : order.foodName,

          tableName : order.tableName,

          quantity : order.quantity,

          subtotal,

          gst,

          total

        }

      );


      fetchBills();

      setSelectedOrder("");

    }

    catch(error){

      console.log(error);

    }

  };


  const downloadBill = (bill) => {

    const doc = new jsPDF();


    doc.setFontSize(22);

    doc.text(

      "Restaurant ERP Invoice",

      20,

      20

    );


    doc.setFontSize(12);

    doc.text(

      `Bill ID : ${bill.id}`,

      20,

      40

    );


    doc.text(

      `Food : ${bill.foodName}`,

      20,

      55

    );


    doc.text(

      `Table : ${bill.tableName}`,

      20,

      70

    );


    doc.text(

      `Quantity : ${bill.quantity}`,

      20,

      85

    );


    doc.text(

      `Subtotal : ₹${bill.subtotal}`,

      20,

      100

    );


    doc.text(

      `GST : ₹${bill.gst}`,

      20,

      115

    );


    doc.text(

      `Total : ₹${bill.total}`,

      20,

      130

    );


    doc.text(

      "Thank you for visiting!",

      20,

      160

    );


    doc.save(

      `Bill-${bill.id}.pdf`

    );

  };


  return (

<div className="flex min-h-screen bg-gray-100">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<div className="p-10">


<h1 className="text-4xl font-bold mb-8">

🧾 Professional Billing

</h1>


<div className="bg-white p-6 rounded-3xl shadow mb-10">


<select

value={selectedOrder}

onChange={(e)=>

setSelectedOrder(e.target.value)

}

className="border p-4 rounded-xl w-full"

>

<option value="">

Select Order

</option>


{orders.map((order)=>(

<option

key={order.id}

value={order.id}

>

{order.foodName}

 | {order.tableName}

</option>

))}

</select>


<button

onClick={generateBill}

className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"

>

Generate Bill

</button>

</div>


<div className="grid md:grid-cols-3 gap-6 mb-10">


<div className="bg-blue-600 text-white p-8 rounded-3xl">

<h2 className="text-2xl">

Total Bills

</h2>


<p className="text-5xl font-bold mt-4">

{bills.length}

</p>

</div>


<div className="bg-green-600 text-white p-8 rounded-3xl">

<h2 className="text-2xl">

Revenue

</h2>


<p className="text-5xl font-bold mt-4">

₹{

bills.reduce(

(acc,bill)=>

acc+bill.total,

0

)

}

</p>

</div>


<div className="bg-purple-600 text-white p-8 rounded-3xl">

<h2 className="text-2xl">

Average Bill

</h2>


<p className="text-5xl font-bold mt-4">

₹{

bills.length

?

Math.round(

bills.reduce(

(acc,bill)=>

acc+bill.total,

0

)

/

bills.length

)

:0

}

</p>

</div>

</div>


<div className="space-y-4">


{bills.map((bill)=>(

<div

key={bill.id}

className="bg-white p-6 rounded-3xl shadow"

>


<h2 className="text-2xl font-bold">

🍔 {bill.foodName}

</h2>


<p>

🪑 {bill.tableName}

</p>


<p>

📦 Quantity : {bill.quantity}

</p>


<p>

Subtotal : ₹{bill.subtotal}

</p>


<p>

GST : ₹{bill.gst}

</p>


<p className="font-bold text-green-600">

Total : ₹{bill.total}

</p>


<button

onClick={()=>

downloadBill(bill)

}

className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"

>

📄 Download PDF

</button>

</div>

))}

</div>

<Footer/>


</div>

</div>

</div>

);

}

export default Billing;