import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import "./styles.css";
import { bloctoSDK } from "./services/ethereum";
import BLTButton from "./component/Button";

function App() {
  const [address, setAddress] = useState(null);

  const loginHandler = async () => {
    const accounts = await bloctoSDK?.ethereum?.enable();
    setAddress(accounts[0]);
  };

  const logoutHandler = async () => {
    try {
      await bloctoSDK?.ethereum?.request({ method: "wallet_disconnect" });
      localStorage.removeItem("sdk.session");
      setAddress(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App">
        {address ? (
          <>
            <BLTButton onClick={logoutHandler}>Logout</BLTButton>
            <p>address: {address}</p>
          </>
        ) : (
          <BLTButton onClick={loginHandler}>Login</BLTButton>
        )}
      </div>
    </div>
  );
}

export default App;
