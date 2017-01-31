var React = require('react');
var ReactDOM = require('react-dom');

var {Link} = require("react-router");
var Examples = (props) => {
  return(<div>
    <h3 className="text-ceneter">Examples </h3>
    <p>Here are a few locations to try out</p>
    <ol>
      <li>
          <Link to='/?location=Sydney'>Sydney, Australia</Link>
      </li>
      <li>
        <Link to='/?location=NewYork'>New York</Link>
      </li>
      <li>
            <Link to='/?location=Tokyo'>Tokyo</Link>
      </li>
    </ol>
  </div>
  );
};


module.exports = Examples;
