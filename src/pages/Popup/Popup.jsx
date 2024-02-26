import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  // State to track toggle on/off
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle state
  const toggle = () => setIsToggled(!isToggled);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>

        {/* Toggle Button */}
        <button onClick={toggle}>
          {isToggled ? 'Full Article' : 'Summary'}
        </button>

        <button>
          Read
        </button>

        {/* Optionally render content based on toggle state */}
        {isToggled && <div>Toggle is ON</div>}
      </header>
    </div>
  );
};

export default Popup;
