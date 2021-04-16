import React from "react";

import LanguageContext from './contexts/LanguageContext';
import Form from './Form';

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = lang => {
    this.setState({ language: lang })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language: 
          <button className="ui button" onClick={() => this.onLanguageChange('english')}>
            English
          </button>
          <div className="ui button" onClick={() => this.onLanguageChange('hindi')}>
            Hindi
          </div>
          <br />
          <LanguageContext.Provider value={this.state.language}>
            <Form />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
