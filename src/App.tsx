import { FC, ReactElement } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/layout/Layout";
import OrderList from "./components/orderList/OrderList";
import Login from "./pages/Login";

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/app" />} />
      <Route path={"/login"} element={<Login />} />
      <Route
        path={"app"}
        element={<Layout />}
        children={[<Route path="orders" element={<OrderList />} />]}
      />
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
