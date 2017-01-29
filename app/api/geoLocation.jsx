var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6d6ab4b2ca4506c5b2b1b4fffa77d863&units=metric';
module.exports= {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
      var requesturl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requesturl).then(function(res){
        if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
        } else{
          return res.data.main.temp;
        }
      }, function(res){
        throw new Error(res.data.message);
      });

  }
};
