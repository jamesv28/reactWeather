var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});

        OpenWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                isLoading: false,
                location: location,
                temp: temp
            })
        }, function(errMessage) {
            alert(errMessage);
            that.setState({isLoading: false});
        });

    },
  render: function() {
        //  inline-source-map || eval-source-map
        var {isLoading, temp, location} = this.state;

      function renderMessage() {
          if(isLoading) {
              return <h3>Fetching Weather...</h3>;
          } else if(temp && location) {
              return <Message temp={temp} location={location} />;
          }
      }
        return (
            <div>
              <h3>Weather Component</h3>
              <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>

        )
      }
    });

module.exports = Weather;
