var React = require('react');

var WeatherMessage =- React.createClass({
    render: function () {
        return(
            <div>
                <p>It is 64 degrees in Denver</p>
            </div>
        )
    }
}); // end of WeatherMessage component

module.exports = WeatherMessage;
