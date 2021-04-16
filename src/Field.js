import React, { useContext } from "react";
import LanguageContext from './contexts/LanguageContext';

const Field = () => {
  const langValue = useContext(LanguageContext);
  const text = langValue === 'english' ? 'Name' : 'नाम'
  return (
    <div className="ui field">
      <label>{text}</label>
      <input />
    </div>
  )
}
// class Field extends React.Component {
//   static contextType = LanguageContext;
//   // The static keyword adds a property to an instance of this class

//   render() {
//     const text = this.context === 'english' ? 'Name' : 'नाम'

//     return (
//       <div className="ui field">
//         <label>{text}</label>
//         <input />
//       </div>
//     )
//   }
// }
// // Field.contextType = LanguageContext;
export default Field;
