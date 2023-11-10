import { FC, ReactElement } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientAgenceProfile from "./pages/clientList/ClientAgenceProfile";
import Layout from "./pages/layout/Layout";
import OrderList from "./pages/orders/OrderList";
import TemplateList from "./pages/templates/TemplateList";
import ItineraryList from "./pages/itinerary/ItineraryList";
import Itinerary from "./pages/itinerary/itinerary";
import ClientAgenceProfileView from "./pages/clientList/ClientAgenceProfileView";
import LibraryList from "./pages/library/LibraryList";
import General from "./pages/clientList/components/General";
import Notes from "./pages/clientList/components/Notes";
import Clients from "./pages/clientList/components/Clients";
import Payrolls from "./pages/clientList/components/Payrolls";
import LayoutClient from "./pages/clients/LayoutClient";
import Test from "./pages/test/Test";
import LayoutClientWithTabs from "./pages/clients/LayoutClientWithTabs";
import GeneralClient from "./pages/clients/childTabs/General";
import NotesClient from "./pages/clients/childTabs/Notes";
import TripsClient from "./pages/clients/childTabs/Trips";
import DocsClient from "./pages/clients/childTabs/Docs";
import PaxListsClient from "./pages/clients/childTabs/PaxLists";
import PayrollClient from "./pages/clients/childTabs/Payroll";
import AllBadge from "./pages/clients/childBadge/All";
import B2BBadge from "./pages/clients/childBadge/B2B";
import B2CBadge from "./pages/clients/childBadge/B2C";
import AgenceBadge from "./pages/clients/childBadge/Agence";

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/app" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/test"} element={<Test />} />
      <Route
        path={"app"}
        element={<Layout />}
        children={[
          <Route path="" element={<OrderList />} />,
          <Route path="library" element={<LibraryList />} />,
          <Route path="templates" element={<TemplateList />} />,
          <Route path="itinerary">
            <Route path="list" element={<ItineraryList />}></Route>
            <Route path="update" element={<Itinerary />}></Route>
          </Route>,
          <Route path="client">
            <Route path="" element={<LayoutClient />}>
              <Route path="" element={<AllBadge />} />
              <Route path="b2b" element={<B2BBadge />} />
              <Route path="b2c" element={<B2CBadge />} />
              <Route path="agence" element={<AgenceBadge />} />
            </Route>
            <Route path="agence/update" element={<ClientAgenceProfile />} />
            <Route path="agence/view" element={<ClientAgenceProfileView />}>
              {/* <Route path="" element={<>general</>} /> */}
              <Route path="general" element={<General />} />
              <Route path="notes" element={<Notes />} />
              <Route path="clients" element={<Clients />} />
              <Route path="payrolls" element={<Payrolls />} />
            </Route>
            <Route path="overview/view" element={<LayoutClientWithTabs />}>
              <Route path="" element={<GeneralClient />} />
              <Route path="general" element={<GeneralClient />} />
              <Route path="notes" element={<NotesClient />} />
              <Route path="trips" element={<TripsClient />} />
              <Route path="docs" element={<DocsClient />} />
              <Route path="paxList" element={<PaxListsClient />} />
              <Route path="payroll" element={<PayrollClient />} />
            </Route>
          </Route>,
        ]}
      />
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
};

export default App;
