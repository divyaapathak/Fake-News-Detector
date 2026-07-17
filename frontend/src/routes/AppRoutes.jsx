import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Analyzer from "../pages/Analyzer";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/ProtectedRoute";

  import Dashboard from "../pages/Dashboard";



function AppRoutes() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      <Route
        path="/analyzer"
        element={
          <ProtectedRoute>
            <Analyzer />
          </ProtectedRoute>
        }
      />


      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />


<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

    </Routes>
  );
}


export default AppRoutes;