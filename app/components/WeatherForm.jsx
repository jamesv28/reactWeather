var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div className="row">
                <form className="form-inline">
                    <input type="text" className="col-md-6 col-sm-6 form-control" placeholder="Enter City Name"/>
                    <button className="btn btn-success">Get Weather!</button>

                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
