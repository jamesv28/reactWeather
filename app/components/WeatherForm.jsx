var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <form >
                <input className="block" type="text" placeholder="Enter City Name"/>
                <button className="btn btn-success">Get Weather!</button>

            </form>
        )
    }
});

module.exports = WeatherForm;
