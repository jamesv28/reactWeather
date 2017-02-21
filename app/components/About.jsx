var React = require('react');

var About = (props) => {
  return (
      <div>
        <h2 className="text-center">About React Weather</h2>
        <p>I would really like to add some images but am having difficulty right now</p>
        <div className="centerImg">
          <img className="weatherImg" src={'./img/tornado.jpg'}/>
          <img className="weatherImg" src={'./img/sandstorm.jpg'}/>
          <img className="weatherImg" src={'../img/mirage.jpg'} />
          <img className="weatherImg" src={'../img/eclipse.jpg'} />
          <img className="weatherImg" src={'../img/monsoon.jpg'} />
          <img className="weatherImg" src={'../img/pyrocumulous.jpg'} />
        </div>
      </div>
  )
};

module.exports = About;

/**
 <Image
 source={require('http://i.dailymail.co.uk/i/pix/2012/07/17/article-2174807-1417909C000005DC-66_964x627.jpg')} />
 **/