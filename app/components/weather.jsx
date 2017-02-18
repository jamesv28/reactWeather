var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');

var Weather = React.createClass({
    handleSearch: function (location) {
        alert(location + "!");
    },
  render: function() {
    return (
        <div>
          <h3>Weather Component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          <Message />
        </div>

    )
  }
});

module.exports = Weather;
