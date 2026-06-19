import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Tables from "./pages/Tables";

import Menu from "./pages/Menu";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tables" element={<Tables />} />

        <Route path="/menu" element={<Menu />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;