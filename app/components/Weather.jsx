var React = require('react');
var ReactDOM = require('react-dom');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openweathermap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
getInitialState: function(){
  return {
    isLoading: false,
    condition: 'fine'

  }
},
  handleSearch: function(location){
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
    var that = this;
    this.setState({isLoading:true,
        errorMessage: undefined
    });
      openWeatherMap.getTemp(location).then(function(temp){
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (e){
      //  alert(errorMessage);
        that.setState({isLoading:false,
        errorMessage: e.message
          });
      });

        openWeatherMap.getCondition(location).then(function(condition){
          that.setState({
            location: location,
            condition: condition,
            isLoading: false
          });
        }, function (e){
          //alert(errorMessage);
          that.setState({isLoading:false,
          errorMessage: e.message});
        });
  },
  render: function(){
    var {isLoading, temp, location, condition, errorMessage} = this.state;
    function renderMessage(){
        if (isLoading){
          return <h3 className="text-center">>Fetching weather...</h3>;
        } else if (temp && location){
          return  (   <div className="callout secondary" data-closable=''>
            <WeatherMessage location={location} temp={temp} condition={condition}/>
            <button className="close-button" aria-label="Dismiss alert" type="button" data-close="">
           <span aria-hidden="true">&times;</span>
         </button>
          </div>);
        }
    }
    function renderErrorMessage(){
      if (typeof errorMessage === 'string')
        {
          return (
            <ErrorModal message={errorMessage}/>
          );
        }
    }
    return(<div>
      <h1 className="text-center">Get Weather</h1>
  {renderMessage()}
  {renderErrorMessage()}
      <WeatherForm onSearch={this.handleSearch}/>


    </div>
    );
  }
});
module.exports = Weather;
