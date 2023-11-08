import { FC } from "react";
import { IListAction } from "../../interfaces/genricModule/icolumn.interface";
import './genericList.css'
import { Button } from "flowbite-react";

const GenericPageHeader: FC<{ title: string, total?: number, actions?: IListAction[] }> = ({ title, total, actions }) => {

  return (
    <div>
      <div className="main-title">
        <h1 className="text-3xl font-bold">{title}</h1>
        {total && <span className="big-badge">{total}</span>}
      </div>
      <div className="hedaer-button">
        {
          actions?.map((action, action_index) => {
            return (
              <Button
                key={`list-action-${action_index}`}
                outline
                className={action.className || (action_index % 2 === 0 ? "outlined-button" : "contained-button")}
                onClick={() => action.callback()}>
                {action.icon}
                <p>{action.label}</p>
              </Button>
            )
          })
        }
      </div>
    </div>
  );
}

export default GenericPageHeader;
