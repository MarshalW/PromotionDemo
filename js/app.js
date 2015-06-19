var React = require('react');
var Swiper=require('./components/Swiper');
var pages=require('./data').pages;

// 设置起始页
pages.startPage=1;

React.initializeTouchEvents(true);

React.render(
	<Swiper data={pages}/>,
	$('#demo')[0]
);





