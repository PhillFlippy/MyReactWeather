var React = require('react');
var ReactDOM = require('react-dom');
var WeatherMessage = ({temp, location}) => {
    return(<div><h3> The temperature in {location} is currently {temp}</h3></div>
    );
};

module.exports = WeatherMessage;
