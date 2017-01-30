var React = require('react');
var ReactDOM = require('react-dom');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About component </h3>
//     );
//   }
// });
var About = (props) => {
  return(<div>
    <h3>About</h3>
    <p>This is an example of an api being used in ReactJS.</p>
  </div>
  );
};
module.exports = About;
