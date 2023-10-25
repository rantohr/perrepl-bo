import { FC } from "react";
import './genericSquareCard.css'
import { Button } from "flowbite-react";
import { ICardOptions } from "../../interfaces/genricModule/icolumn.interface";

const GenericSquareCard: FC<ICardOptions> = ({ image, label, title, subtitle, content, actions, footer }) => {

  const clickMainAction = () => {
    if (actions?.main_callback !== undefined) actions.main_callback();
  };

  const clickSecondaryAction = () => {
    if (actions?.secondary_callback !== undefined) actions.secondary_callback();
  };

  return (
    <div className="square-card">
      <div className="square-card-image-container">
        <img src={image} alt="" />
        {
          label &&
          <div className="square-card-label" style={{ backgroundColor: label.backgroundColor }}>
            {label.icon}
            <p>{label.text}</p>
          </div>
        }
      </div>
      <h4>{title}</h4>
      <h6>{subtitle.icon} {subtitle.text}</h6>
      <div className="square-card-content">
        <h5>{content?.content_icon} {content?.content_title}</h5>
        <h6>{content?.content_subtitle}</h6>
      </div>
      <div className="square-card-actions">
        {
          actions?.main_title &&
          <Button outline className="outlined-button" onClick={clickMainAction}>{actions?.main_title}</Button>
        }
        {
          actions?.secondary_icon &&
          <Button outline className="contained-button" onClick={clickSecondaryAction}> {actions.secondary_icon} </Button>
        }
      </div>
      <div className="square-card-footer">
        {footer?.title && <h6>{footer.title}</h6>}
        {footer?.subtitle && <h5>{footer.subtitle}</h5>}
      </div>
    </div>
  );
}

export default GenericSquareCard;
