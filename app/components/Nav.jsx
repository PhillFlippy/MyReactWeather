var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div>
          <h2>Nav</h2>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};
module.exports = Nav;
