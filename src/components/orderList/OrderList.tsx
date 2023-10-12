import { useUserStore } from "../../stores/user.store";

function OrderList() {
  const user = useUserStore((state) => state);

  const patchUser = user.setCurrentUser;

  return (
    <>
      <div className="p-4 m-auto rounded-lg">
        <h1 className="text-3xl font-bold">
          Demandes
        </h1>
      </div>
    </>
  );
}

export default OrderList;
