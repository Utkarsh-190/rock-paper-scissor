import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Game from "./components/Game";
import { getStudentsData, saveStudentsData } from "./utils/api";

function App() {
  useEffect(() => {
    // saveStudentsData()
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    // getStudentsData()
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  }, []);

  return (
    <div className="app">
      <Game />
      {/* <Form /> */}
    </div>
  );
}

export default App;
