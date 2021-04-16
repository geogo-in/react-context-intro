import React from "react";
import LanguageContext from './contexts/LanguageContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  // The static keyword adds a property to an instance of this class

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'प्रस्तुत'
  }
  render() {
    // console.log(this.context)
    // const text = this.context === 'english' ? 'Submit' : 'प्रस्तुत'
    return (
      <button className="ui button primary">
        {/* {text} */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;
