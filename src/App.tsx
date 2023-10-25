import { FC, ReactElement } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientAgenceProfile from "./pages/clientList/ClientAgenceProfile";
import Layout from "./pages/layout/Layout";
import OrderList from "./pages/orders/OrderList";
import ClientAgenceProfileView from "./pages/clientList/ClientAgenceProfileView";

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/app" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route
        path={"app"}
        element={<Layout />}
        children={[
          <Route path="" element={<OrderList />} />,
          <Route path="client">
            <Route path="agence/update" element={<ClientAgenceProfile />} />
            <Route path="agence/view" element={<ClientAgenceProfileView />} />
          </Route>,
        ]}
      />
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
