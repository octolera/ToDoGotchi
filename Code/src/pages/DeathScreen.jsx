import { useState } from "react";
import { set, remove } from "../data/IonicStorage";
import {
  IonPage,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";

import "./DeathScreen.css";
import "./common.css";
import { useHistory } from "react-router";

function DeathScreen() {
  const history = useHistory();
  const [opacity, setOpacity] = useState(0);
  useIonViewWillEnter(() => {
    setOpacity(1);
  });
  useIonViewWillLeave(() => {
    setOpacity(0);
  });
  const restart = async () => {
    await set("_dead", false);
    await remove("_petname");
    history.replace("/");
  };
  return (
    <IonPage id="death-screen">
      <div
        style={{
          transition: "opacity",
          transitionDuration: "100ms",
          opacity: opacity,
        }}
        className="common-container">
        <p id="death-header">
          не откладывай на завтра то, что можешь сделать послезавтра
        </p>
        <div id="death-container">
          <img src="/assets/pet-static/kepa-dead.webp" />
          <h1 id="death-title">Побеждён дедлайном</h1>
          <p id="death-stat">Пройдено: 15 дней</p>
          <button onClick={restart} className="btn">
            Начать заного
          </button>
        </div>
      </div>
    </IonPage>
  );
}

export default DeathScreen;
