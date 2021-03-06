var React = require('react');
var ReactDOM = require('react-dom');
var WeatherMessage = ({temp, location, condition}) => {
    var imgSrc = '';
    var conditions = condition;
    if (condition === "Rain" || condition==="Drizzle"){
    imgSrc="https://i.imgur.com/aT7PJ9D.png";

    }else if(condition==="Clouds"){
            imgSrc="http://i.imgur.com/8xA7SfW.png";
            conditions= "cloudy weather";
    }
    else if(condition==="Haze" || condition==="Fog" || condition === "Mist"){
            imgSrc="http://i.imgur.com/N9MgVS9.png";
    }
    else if (condition === "Snow"){
        imgSrc="https://i.imgur.com/wiatw0l.png";
        conditions="snowy conditions"
    }
    else if (condition === "Clear" || condition==="Sun")     {
           imgSrc="https://i.imgur.com/mtMDH6s.png";
           conditions="sunny weather"
        }

    return(<div><h3 className="text-center"> The temperature in <strong>{location}</strong> is currently {temp} and it is
         currently experiencing <strong>{conditions}</strong></h3>
            <image className="center" src={imgSrc} />
     </div>
    );
};

module.exports = WeatherMessage;
