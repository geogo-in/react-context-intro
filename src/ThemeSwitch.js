import React, { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContextProvider";

const ThemeSwitch = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="field">
      <button className="ui button" onClick={() => setTheme('light')}>
        Light
      </button>
      <button className="ui button" onClick={() => setTheme('dark')}>
        Dark
      </button>
    </div>
  );
};

export default ThemeSwitch;