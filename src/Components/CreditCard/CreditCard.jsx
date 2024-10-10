import "./CreditCard.css";
import chip from "../../assets/chip.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import MasterCardLogo from "../MasterCardLogo/MasterCardLogo";

const CreditCard = () => {
  return (
    <div className="creditcard">
      <div className="card-top half">
        <div className="top-left">
          <div>
            <FontAwesomeIcon icon={faWifi} size="3x" className="signal" />
          </div>
          <div>
            <img src={chip} alt="chip" style={{ width: "100px" }} />
          </div>
        </div>
        <div className="top-right">fluid</div>
      </div>
      <div className="card-bottom half">
        <div className="credit-card-numbers">
          <div>1234</div>
          <div>5678</div>
          <div>1234</div>
          <div>5678</div>
        </div>
        <div className="credit-card-data-and-logo">
          <div className="credit-card-data">
            <div className="credit-card-details">
              <div>5193</div>
              <div>
                VALID FROM
                <div className="dates">12/20</div>
              </div>
              <div>
                UNTIL END
                <div className="dates">12/25</div>
              </div>
            </div>
            <div className="cardholder-name">LEE M. CARDHOLDER</div>
          </div>
          <div className="mastercard-logo">
            <MasterCardLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
