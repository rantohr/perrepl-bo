import { FC, ReactElement } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientList from "./components/clientList/ClientList";
import NotFound from "./components/NotFound";

const App: FC = (): ReactElement => {

  return (
    <Routes>
      <Route path={'/'} element={<ClientList />} />
      {/* <Route path={'/login'} element={<LoginPage />} />
      <Route path={'client'} element={<ClientList />} children={[
        <Route path='' element={<ProductsPage />} />,
        <Route path='product/:id' element={<ProductDetail />} />,
      ]} /> */}
      <Route path={'/*'} element={<NotFound />} />
    </Routes>
  )
};

export default App;
