import { IonPage } from "@ionic/react";
import "./common.css";
import "./PetName.css";
import { Link } from "react-router-dom";
function PetName() {
  return (
    <IonPage id="petname-screen">
      <div className="common-container">
        <div id="petname-btn-back-container">
          <Link
            to="/username"
            style={{ width: "fit-content" }}
            className="btn-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none">
              <path
                d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z"
                fill="black"
              />
            </svg>
            <span style={{ userSelect: "none", cursor: "default" }}>Назад</span>
          </Link>
        </div>
        <div style={{ position: "relative" }} className="action-container">
          <img
            id="petname-egg"
            height="319"
            width="319"
            style={{
              position: "absolute",
              bottom: "-85px",
              left: "-55px",
              zIndex: "120",
              minWidth: "319px",
            }}
            src="/assets/pet-static/egg.webp"
          />
          <svg
            id="petname-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="204"
            height="64"
            viewBox="0 0 204 64"
            fill="none">
            <ellipse cx="102" cy="32" rx="102" ry="32" fill="currentColor" />
          </svg>
        </div>
        <span id="petname-container">
          <p id="petname-invitation">
            Привет, username! Теперь дай имя своему питомцу:
          </p>
          <input
            maxLength={25}
            placeholder="Имя питомца"
            className="inp-field"
          />
          <button className="btn">Готово!</button>
        </span>
      </div>
    </IonPage>
  );
}

export default PetName;
