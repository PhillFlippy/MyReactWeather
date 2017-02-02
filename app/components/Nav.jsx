var React = require('react');
var ReactDOM = require('react-dom');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
onSearch: function(e){
  e.preventDefault();
  var location= this.refs.location.value;
  var encodeLocation = encodeURIComponent(location);
  if(location.length>0){
    this.refs.location.value = '';
    window.location.hash = '#/?location=' + encodeLocation;
  }
},
  render: function(){
    return(
        <div className="top-bar nav-br">
            <div className = "top-bar-left">
                <ul className="menu nav-br">
                  <li className="menu-text menu-centered nav-br">React Weather App</li>
                  <li> <IndexLink to="/" className = "nav-br" activeClassName="active " activeStyle={{fontWeight: 'bold', color:'white'}}>Get Weather</IndexLink></li>
                  <li><Link to="/About" className = "nav-br" activeClassName="active" activeStyle={{fontWeight: 'bold' , color:'white'}}>About</Link></li>
                  <li><Link to="/Examples" className = "nav-br" activeClassName="active" activeStyle={{fontWeight: 'bold', color:'white'}}>Examples</Link></li>
                </ul>
            </div>
            <div className = "top-bar-right nav-br">
                <form onSubmit={this.onSearch}>
                   <ul className="menu nav-br">
                     <li className = "nav-br">
                       <input type="search" placeholder="Search weather by city" ref="location"/>
                     </li>
                     <li className = "nav-br">
                       <input type="submit" className="button primary" value="Get weather"/>
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
