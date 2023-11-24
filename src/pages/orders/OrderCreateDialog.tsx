import { FC } from "react";
import { Modal } from "flowbite-react";
import { GrAddCircle } from "react-icons/gr";
import OrderForm from "./OrderForm";
import { IOrder } from "../../interfaces/iorder.interface";

const OrderCreateDialog: FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {

  const onConfirm = (data: IOrder) => {
    console.log('FINAL DATA', data);
  };

  return (
    <Modal dismissible show={open} onClose={onClose} className="glass-container">
      <Modal.Body>
        <div className="form-modal">
          <Modal.Header className="form-modal-header">
            <GrAddCircle />
            <h3>Nouvelle demande</h3>
            <p>Ajouter une nouvelle demande</p>
          </Modal.Header>
          <Modal.Body>
            <OrderForm onConfirm={onConfirm} onCancel={onClose} />
          </Modal.Body>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderCreateDialog;
