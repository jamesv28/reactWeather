var React = require('react');

var Message = React.createClass({

    render: function () {
        var {temp, location} = this.props;

        return (
            <h4>It is {temp} in {location}</h4>
        )
    }
}); //end of message

module.exports = Message;
