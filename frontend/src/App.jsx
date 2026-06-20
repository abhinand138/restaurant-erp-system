import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Tables from "./pages/Tables";

import Menu from "./pages/Menu";

import Orders from "./pages/Orders";

import Billing from "./pages/Billing";

import Analytics from "./pages/Analytics";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
        path="/tables"
        element={
             <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
         <Tables />
         </ProtectedRoute>
        }
        />

        <Route
        path="/menu"
        element={
        <ProtectedRoute allowedRoles={["ADMIN", "MANAGER"]}>
        <Menu />
        </ProtectedRoute>
        }
        />

        <Route
        path="/orders"
        element={
        <ProtectedRoute
        allowedRoles={["ADMIN", "MANAGER", "CASHIER"]}
       >
       <Orders />
       </ProtectedRoute>
      }
      />

        <Route
        path="/billing"
        element={
        <ProtectedRoute
        allowedRoles={["ADMIN", "CASHIER"]}
       >
       <Billing />
       </ProtectedRoute>
      }
      />

        <Route
        path="/analytics"
        element={
       <ProtectedRoute
        allowedRoles={["ADMIN", "MANAGER"]}
       >
       <Analytics />
      </ProtectedRoute>
      }
      />

      </Routes>

    </BrowserRouter>

  );

}

export default App;