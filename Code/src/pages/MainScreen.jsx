import { useRef, useState } from "react";
import {
  IonPage,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { set, get } from "../data/IonicStorage";
import "./MainScreen.css";
import "./common.css";
import { useHistory } from "react-router";

const states = [
  {
    src: "/assets/pet-static/kepa-idle.webp",
    minHealth: 50,
    maxHealth: 100,
  },
  {
    src: "/assets/pet-static/kepa-done.webp",
    minHealth: 1,
    maxHealth: 49,
  },
];
const MainScreen = () => {
  const history = useHistory();
  const [health, setHealth] = useState(10);
  const [petname, setPetname] = useState("");
  const [opacity, setOpacity] = useState(0);
  const video = useRef();
  useIonViewWillEnter(() => {
    const fetchStore = async () => {
      const name = await get("_petname");
      setPetname(name);
    };
    fetchStore();
    setOpacity(1);
    video.current.currentTime = 15;
  });
  useIonViewWillLeave(() => {
    setOpacity(0);
  });
  const testClick = () => {
    setHealth((x) => (x >= 100 ? 0 : x + 10));
    if (health + 10 > 100) {
      //await set("_dead", true);
      history.replace("/death-screen");
    }
  };

  return (
    <IonPage id="main-screen">
      <div
        style={{
          transition: "opacity",
          transitionDuration: "300",
          opacity: opacity,
        }}
        id="main-container"
        className="common-container">
        <div id="main-title">ToDoGotchi</div>
        <div data-testid="pet-name" id="pet-name">
          {petname}
        </div>
        <div id="pet-border">
          <video
            autoPlay={true}
            muted={true}
            ref={video}
            style={{ zIndex: 10, width: 300 }}
            preload="metadata">
            <source src="/assets/pet-static/kepa.webm" type="video/webm" />
          </video>
        </div>
        <span id="health-bar">
          <p>Здоровье</p>
          <span id="health-percentage">
            <p style={{ width: "100%", textAlign: "end" }}>{health}%</p>
          </span>
        </span>
        <span id="task-counter">
          <p>Задачи</p>
          <span id="health-percentage">
            <p style={{ width: "100%", textAlign: "end" }}>2/5</p>
          </span>
        </span>
        <button onClick={testClick} id="task-button" className="btn-inverse">
          Задания
        </button>
      </div>
    </IonPage>
  );
};

export default MainScreen;
