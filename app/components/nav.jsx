var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

    onSearch: function (e) {
        e.preventDefault();
        alert("not set up yet dude");
    },

    render: function () {
      return (
          <div className="top-bar" data-topbar role="navigation">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        <i className="wi wi-day-cloudy"></i>
                        React Weather App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </Link>
                    </li>
                    <li>
                        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
                    </li>
                </ul>
            </div>
              <div className="top-bar-right">
                  <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input type="search" type="text" placeholder="Search"/>
                        </li>
                        <li>
                            <input type="submit" className="button alert" value="Get Weather" />
                        </li>
                    </ul>
                  </form>
              </div>
          </div>
      )
    }
}); // end of Nav class

module.exports = Nav;

var old = (
    <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
    </div>
);