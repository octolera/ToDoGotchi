import { useState } from "react";
import { IonPage } from "@ionic/react";
import "./common.css";
import "./Username.css";

function Username() {
  return (
    <IonPage id="username-screen">
      <div id="username-wrapper" className="common-container">
        <h1 id="username-header">ToDoGotchi</h1>
        <span id="username-container">
          <p id="username-invitation">Привет, меня зовут...</p>
          <input maxLength={25} placeholder="Моё имя" className="inp-field" />
          <button className="btn">Далее</button>
        </span>
      </div>
    </IonPage>
  );
}

export default Username;
