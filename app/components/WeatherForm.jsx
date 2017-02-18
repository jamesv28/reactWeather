var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    },

    render: function () {
        return (
            <div className="row">
                <form className="form-inline" onSubmit={this.onFormSubmit}>
                    <input type="text" className="col-md-6 col-sm-6 form-control" placeholder="Enter City Name" ref="location"/>
                    <button className="btn btn-success">Get Weather!</button>

                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
