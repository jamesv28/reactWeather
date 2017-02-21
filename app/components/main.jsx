var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
        <div>
          <Nav />
          <div className="row">
            <div className="large-6 large-offset-3 medium-8 medium-offset-2 small-centered columns">
                {this.props.children}
            </div>
          </div>
        </div>
    )
  }
});

module.exports = Main;
