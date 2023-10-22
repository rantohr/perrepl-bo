import { FC, ReactElement } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/layout/Layout";
import OrderList from "./components/orderList/OrderList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientAgenceProfile from "./components/clientList/ClientAgenceProfile";

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/app" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route
        path={"app"}
        element={<Layout />}
        children={[<Route path="" element={<OrderList />} />]}
      />

      <Route path="/client">
        <Route path="agence/update" element={<ClientAgenceProfile />} />
      </Route>
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
