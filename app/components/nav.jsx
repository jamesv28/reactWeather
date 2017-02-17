var React = require('react');

var Nav = React.createClass({
    render: function () {
      return (
          <nav>
              <a href="#">Home </a>
              <a href="#">Weather </a>
              <a href="#">About </a>
          </nav>
      )
    }
}); // end of Nav class

module.exports = Nav;