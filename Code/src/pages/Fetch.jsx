import { useEffect, Fragment } from "react";
import { useHistory } from "react-router";
import { createStore, get } from "../data/IonicStorage";
function Fetch() {
  const history = useHistory();
  useEffect(() => {
    const setupStore = async () => {
      await createStore("UserData");
      if (!(await get("_username"))) {
        history.push("/username");
        return;
      }
      if (!(await get("_petname"))) {
        history.push("/petname");
        return;
      }
      history.push("/main-screen");
    };
    setupStore();
  }, []);
  return <Fragment />;
}

export default Fetch;
