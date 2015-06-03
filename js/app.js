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

// $('#demo').on('start touchmove end',function(e){
// 	return true;
// });

// $('#demo').on('touchstart',function(e){
// 	e.preventDefault();
// 	return false;
// 	// e.stopPropagation();
// });

// 防止页面整体上下滚动
// $(document).on('touchmove',function(e){
// 	e.preventDefault();
// });

// $('#demo').on('touchmove', function(e){
//   e.stopPropagation();
//   return false;
// });





