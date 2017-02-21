var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    return (
        <div>
            <h2 className="text-center">Examples</h2>
            <p>Wherever you go, no matter what the weather, always bring your own sunshine.
            </p>
            <i className="wi-alt wi wi-sandstorm "/>
            <i className="wi-alt wi wi-tornado" />
            <i className="wi-alt wi wi-meteor" />
            <i className="wi-alt wi wi-night-alt-cloudy-windy" />
            <i className="wi-alt wi wi-solar-eclipse" />
            <p>Here are a few places you can check out</p>
            <ul >
                <li>
                    <Link to="/?location=Denver">Denver, CO</Link>
                </li>
                <li>
                    <Link to="/?location=Atlanta">Atlanta, GA</Link>
                </li>
                <li>
                    <Link to="/?location=Portland">Portland, OR</Link>
                </li>
            </ul>
        </div>
    )
};
module.exports = Examples;