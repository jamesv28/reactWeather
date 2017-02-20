var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
        <div>
          <Nav />
          <div className="row">
            <div className="large-4 large-offset-4 medium-6 medium-offset-3 small-centered columns">
                {this.props.children}
            </div>
          </div>
        </div>
    )
  }
});

module.exports = Main;
