import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    try {

      const response = await api.post(

        "/api/auth/login",

        {

          email,

          password

        }

      );


      if (response.data.success) {

        localStorage.setItem(

          "role",

          response.data.role

        );


        navigate("/dashboard");

      }

      else {

        alert(response.data.message);

      }

    }

    catch (error) {

      alert("Login failed");

      console.log(error);

    }

  };


  return (

<div

className="min-h-screen bg-cover bg-center flex items-center justify-center"

style={{

backgroundImage:

"url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')"

}}

>

<div className="absolute inset-0 bg-black/70"></div>


<div className="relative w-full max-w-md">

<div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-10">


<div className="text-center mb-8">

<div className="text-6xl mb-4">

🍽️

</div>


<h1 className="text-5xl font-bold">

Restaurant ERP

</h1>


<p className="text-gray-500 mt-3">

Manage your restaurant smarter

</p>


<p className="text-sm text-gray-400 mt-2">

Admin • Manager • Cashier

</p>

</div>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border border-gray-300 p-4 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"

/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border border-gray-300 p-4 mb-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"

/>


<button

onClick={handleLogin}

className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition duration-300"

>

Login

</button>


<div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">

<div className="bg-gray-100 p-3 rounded-lg">

👑

<div>Admin</div>

</div>


<div className="bg-gray-100 p-3 rounded-lg">

🧑‍💼

<div>Manager</div>

</div>


<div className="bg-gray-100 p-3 rounded-lg">

💰

<div>Cashier</div>

</div>

</div>

</div>

</div>

</div>

);

}

export default Login;