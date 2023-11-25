import { FC, useState } from "react";
import { Modal, Spinner } from "flowbite-react";
import { GrAddCircle } from "react-icons/gr";
import OrderForm from "./OrderForm";
import { IOrder } from "../../interfaces/iorder.interface";
import { useSnackbar } from "notistack";
import { patchOrder } from "../../services/order.service";

const OrderEditDialog: FC<{ open: boolean, onClose: () => void, onSuccess?: () => void }> = ({ open, onClose, onSuccess }) => {

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const onConfirm = (data: IOrder) => {
    console.log('FINAL DATA', data);
    setLoading(true);
    patchOrder(data.id, data)
      .then((response) => {
        console.log('response', response);
        setLoading(false);
        enqueueSnackbar('demande mise à jour avec succès', { variant: 'success' });
        onClose();
        if (onSuccess !== undefined) onSuccess();
      }).catch((error) => {
        setLoading(false);
        if (error.response?.data?.errors) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const [_key, value] of Object.entries(error.response.data.errors)) {
            if (Array.isArray(value)) {
              value.map(error => enqueueSnackbar(`${error}`, { variant: 'error' }));
            } else {
              enqueueSnackbar(`${value}`, { variant: 'error' });
            }
          }
        } else if (error.response) {
          if (error.response.status === 400) {
            for (const [key, value] of Object.entries(error.response.data)) {
              if (Array.isArray(value)) {
                value.map(error => enqueueSnackbar(`${key} : ${error}`, { variant: 'error' }));
              } else {
                enqueueSnackbar(`${key} : ${value}`, { variant: 'error' });
              }
            }
          } else if (error.response.status === 401 || error.response.status === 403) {
            enqueueSnackbar('Problème de permission', { variant: 'error' });
          } else if (error.response.status === 500) {
            enqueueSnackbar('Erreur du serveur', { variant: 'error' });
          }
        } else if (error.request) {
          console.log('error.request : ', error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  };

  return (
    <>
      <Modal dismissible show={open} onClose={onClose} className="glass-container">
        <Modal.Body>
          <div className="form-modal">
            <Modal.Header className="form-modal-header">
              <GrAddCircle />
              <h3>Modification de demande</h3>
              <p>Modifier votre demande</p>
            </Modal.Header>
            <Modal.Body>
              <OrderForm onConfirm={onConfirm} onCancel={onClose} />
            </Modal.Body>
          </div>
        </Modal.Body>
      </Modal>
      {loading && <div className="big-loader"><Spinner /></div>}
    </>
  );
}

export default OrderEditDialog;
