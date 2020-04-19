import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
