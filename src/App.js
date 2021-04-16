import React, { useContext, useState } from "react";

import LanguageContext from './contexts/LanguageContext';
import Form from './Form';
import { theme } from "./theme";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import ThemeSwitch from "./ThemeSwitch";

const getStyles = (mode) => ({
  app: {
    height: "100vh",
    width: "100%",
    padding: 16,
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});

const App = () => {

  const [ language, setLanguage ] = useState('english')

  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);

  return (
    <div style={styles.app}>
      <div className="ui container">
        <div>
          <h2 style={(styles.text)}>Select a language: </h2>
          <button className="ui button" onClick={() => setLanguage('english')}>
            English
          </button>
          <button className="ui button" onClick={() => setLanguage('hindi')}>
            Hindi
          </button>
          <br />
          <LanguageContext.Provider value={language}>
            {/* The Provider property is nothing but a React component */}
            <Form />
          </LanguageContext.Provider>
        </div>
        <ThemeSwitch />
      </div>
    </div>
    
  );
}

export default App;
