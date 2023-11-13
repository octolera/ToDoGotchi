import { useState } from "react";
import { IonPage } from "@ionic/react";
import "./Home.css";
import "./common.css";

const Home = () => {
  return (
    <IonPage id="home-page">
      <div style={{ margin: 40 }}>
        <button className="btn">1234</button>
        <button className="btn-inverse">asdfghj</button>
      </div>
    </IonPage>
  );
};

export default Home;
