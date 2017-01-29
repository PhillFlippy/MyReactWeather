var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('Nav');


var Main = (props) => {
  return(<div>
    <Nav/>
    <h2>Main Component!</h2>
    {props.children}
</div>
  );
};
module.exports = Main;
