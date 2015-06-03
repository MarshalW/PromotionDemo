var React = require('react');
var classNames = require('classnames');

var AnimationMixin=require('../utils/AnimationMixin');

var ContentComponent=React.createClass({
	mixins:[AnimationMixin],
	render:function(){
		var component=this.props.data;
		var classes = classNames({'anim':component.animation!=null});
		
		var animData=this.getAnimData(component);

		return (
			<p className={classes} data-anim={animData.anim} data-anim-delay={animData.animDelay}>{component.content}</p>
		);
	}
});

module.exports=ContentComponent;