import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleLogin = async () => {

    try {

      const response = await api.post("/api/auth/login", {

        email,

        password

      });


      if (response.data.success) {

   localStorage.setItem(

      "role",

      response.data.role

   );

   navigate("/dashboard");

} else {

        alert(response.data.message);

      }

    } catch (error) {

      alert("Login failed");

      console.log(error);

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-2">

          Restaurant ERP

        </h1>

        <p className="text-center text-gray-500 mb-6">

          Login to continue

        </p>


        <input

          type="email"

          placeholder="Email"

          className="w-full border p-3 mb-4 rounded"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />


        <input

          type="password"

          placeholder="Password"

          className="w-full border p-3 mb-6 rounded"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />


        <button

          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"

          onClick={handleLogin}

        >

          Login

        </button>

      </div>

    </div>

  );

}

export default Login;