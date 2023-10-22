import { useUserStore } from "../../stores/user.store";
import ClientAgenceProfile from "../clientList/ClientAgenceProfile";
import ClientAgenceProfileView from "../clientList/ClientAgenceProfileView";

function OrderList() {
  const user = useUserStore((state) => state);

  const patchUser = user.setCurrentUser;

  return (
    <>
      {/* <ClientAgenceProfile /> */}
      <ClientAgenceProfileView />
      {/* <div className="p-4 m-auto rounded-lg">
        <h1 className="text-3xl font-bold">
          Demandes
        </h1>
      </div> */}
    </>
  );
}

export default OrderList;
