import { useState } from "react";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const [login, setLogin] = useState(false);
  const [lineDetails, setLineDetails] = useState(false);
  const [factoryDetails, setFactoryDetails] = useState(false);

  function handleFactoryDetails() {
    setFactoryDetails(true);
    setLineDetails(false);
  }

  function handleLineDetails() {
    setLineDetails(true);
    setFactoryDetails(false);
  }

  function handleLogin() {
    setLogin(true);
  }
  return (
    <div className="App">
      {login ? (
        <div className="loged">
          <Sidebar />
          <div>
            <Header handleLineDetails={handleLineDetails} />
            <Dashboard
              lineDetails={lineDetails}
              factoryDetails={factoryDetails}
              handleFactoryDetails={handleFactoryDetails}
            />
          </div>
        </div>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
