var React = require('react');

var WeatherMessage = ({temp, location}) => {
  
  return(
    <h3>It is {temp} degrees Celsius in {location}</h3>
  );
};

module.exports = WeatherMessage;
