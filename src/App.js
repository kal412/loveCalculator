import React from 'react';
import Home from './Home';
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-mui";
import Weather from './Weather';

const options = {
  position: positions.MIDDLE,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

function App() {
  return (
    <div className="App">
    <div className="background">
    <AlertProvider template={AlertTemplate} {...options} >
      <Home />
      </AlertProvider>
      <Weather />
    </div>
    </div>
  );
}

export default App;
