import { Button, Dropdown, Select } from "flowbite-react";
import { useUserStore } from "../../stores/user.store";
import { MdModeEdit, MdDelete, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function OrderList() {
  const user = useUserStore((state) => state);

  const patchUser = user.setCurrentUser;

  const getStatusColor = () => {
    return "#00d971";
  };

  const getStatusBgColor = () => {
    return "#00d9712b";
  };

  return (
    <div className="list-container order-list">
      {/* LIST HEADER */}
      <div>
        <div className="main-title">
          <h1 className="text-3xl font-bold">Demandes</h1>
          <span className="big-badge">3</span>
        </div>
        <div className="hedaer-button">
          <Button outline className="outlined-button">
            <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
            </svg>
            <p>Nouvelle demande</p>
          </Button>
          <Button className="contained-button">
            <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
            </svg>
            <p>Envoyer un formulaire</p>
          </Button>
        </div>
      </div>

      {/* LIST FILTER */}
      <div className="list-filter">
        <div>
          <Button outline className="default-outlined-button">Tout</Button>
          <Button outline className="default-outlined-button">Nouvelle</Button>
          <Button outline className="default-outlined-button">En cours</Button>
          <Button outline className="default-outlined-button">En attente</Button>
          <Button outline className="default-outlined-button">Envoyée</Button>
          <Button outline className="default-outlined-button">En voyage</Button>
          <Button outline className="default-outlined-button">Confirmée</Button>
        </div>
        <div>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z" />
          </svg>
          <p>Filtrer par</p>
          <Select>
            <option>Nom du client</option>
          </Select>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <div>
            <h6></h6>
          </div>
          <div>
            <h6>Client</h6>
            <MdKeyboardArrowDown />
          </div>
          <div>
            <h6>Demande</h6>
          </div>
          <div>
            <h6>Arrivé</h6>
          </div>
          <div>
            <h6>Type de client</h6>
          </div>
          <div>
            <h6>Status</h6>
          </div>
          <div>
            <h6></h6>
          </div>
        </div>
        {[1, 2].map(i => {
          return (
            <div className="table-row" key={i}>
              <div>
                <img src="/profile-pic-test.jpg" />
              </div>
              <div>
                <p>Annette Black</p>
              </div>
              <div>
                <p>19/11/2023</p>
              </div>
              <div>
                <p><b>19/11/2023</b></p>
                <p>06h42</p>
              </div>
              <div>
                <b>B2B</b>
              </div>
              <div>
                <div className="status" style={{ color: getStatusColor(), backgroundColor: getStatusBgColor() }}>Nouvelle</div>
              </div>
              <div className="table-actions">

                <Dropdown dismissOnClick={false} renderTrigger={() => (
                  <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                )}>
                  <Dropdown.Item icon={MdModeEdit}>Modifier</Dropdown.Item>
                  <Dropdown.Item icon={MdDelete}>Supprimer</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default OrderList;
