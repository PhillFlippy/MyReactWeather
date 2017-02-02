var React = require('react');
var ReactDOM = require('react-dom');
var About = (props) => {
  return(<div className="text-ceneter">
    <h3 className="pageTitle">About</h3>
    <div className="alert callout" data-closable=''>
    <p>
      This is an example of an api being used in ReactJS. I am using this to showcase my ReactJS skills.
    </p>
    <button className="close-button" aria-label="Dismiss alert" type="button" data-close="">
   <span aria-hidden="true">&times;</span>
 </button>
  </div></div>
  );
};
module.exports = About;
