var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
onSearch: function(e){
  e.preventDefault();
  alert("Not complete");
},
  render: function(){
    return(
        <div className="top-bar">
            <div className = "top-bar-left">
                <ul className="menu">
                  <li className="menu-text menu-centered">React Weather App</li>
                  <li> <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                  <li><Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                  <li><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                </ul>
            </div>
            <div className = "top-bar-right">
                <form onSubmit={this.onSearch}>
                   <ul className="menu">
                     <li>
                       <input type="search" placeholder="Search weather"/>
                     </li>
                     <li>
                       <input type="submit" className="button" value="Get weather"/>
                     </li>
                   </ul>
                </form>
            </div>
        </div>
    );
  }
});

module.exports = Nav;


// {/* <div>
//       <h2>Nav</h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//       <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//       <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// </div> */}
