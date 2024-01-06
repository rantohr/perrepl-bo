import { Button, Modal } from "flowbite-react";
import { IOrder } from "../../interfaces/iorder.interface";
import { LIST_VARIABLES } from "../../functions";
import { useState } from "react";
import { updateOrderStatus } from "../../services/order.service";

type PropsOrderChangeStatus = {
  currentOrder: IOrder | null;
  setOpen: React.Dispatch<React.SetStateAction<IOrder | null>>;
  loadData: () => void;
};
export default function OrderChangeStatus({
  currentOrder,
  setOpen,
  loadData,
}: PropsOrderChangeStatus) {
  const [newStatus, setNewStatus] = useState("New");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentOrder) {
      updateOrderStatus(currentOrder.id, newStatus)
        .then(() => {
          loadData();
          setOpen(null);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div>
      <Modal
        dismissible
        show={currentOrder !== null}
        onClose={() => setOpen(null)}
        className="glass-container"
      >
        <Modal.Body>
          <div className="form-modal">
            <Modal.Header className="form-modal-header">
              <h3>Modification du status</h3>
            </Modal.Header>
            <Modal.Body>
              <form noValidate onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="order_status"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    onChange={(e) => setNewStatus(e.target.value)}
                    id="countries"
                    name="order_status"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm- rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {LIST_VARIABLES.ORDER_STATUS.map((item, index) => (
                      <option
                        key={index}
                        selected={item.value === newStatus}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4 mt-4">
                  <Button className="contained-button" type="submit">
                    Confirmer
                  </Button>
                  <Button color="gray" onClick={() => setOpen(null)}>
                    Annuler
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
