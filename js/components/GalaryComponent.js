var React = require('react');
var classNames = require('classnames');

var AnimationMixin=require('../utils/AnimationMixin');
var AnimationController=require('../utils/AnimationController');

var GalaryComponent=React.createClass({
	mixins:[AnimationMixin],
	componentDidMount:function(){
		var self=this;
		setTimeout(function(){
			$(React.findDOMNode(self)).dragend({	
				pageClass:'galaryPage',
				stopPropagation: true
			});
			AnimationController.on('after-clear-animation',function(){
				$(React.findDOMNode(self)).dragend({
					scrollToPage:1
				});
				// TODO vertical的情况
			});
		},0);
	},
	render:function(){
		var component=this.props.data;
		var classes = classNames({'anim':component.animation!=null});

		var animData=this.getAnimData(component);

		return (
			<div className={classes} id='galary' data-anim={animData.anim} data-anim-delay={animData.animDelay}>
				<ul>
					{component.images.map(function(image){
						return <GalaryComponentItem data={image} key={image.id} />
					})}
				</ul>
			</div>
		);
	}
});

var GalaryComponentItem=React.createClass({
	render:function(){
		var classes = classNames('galaryPage');
		var imageClasses=classNames('galaryImage');
		var image=this.props.data;
		return (
			<li className={classes}>
				<img src={image.src} className={imageClasses} width="350" height="200" />
			</li>
		);
	}
});

module.exports = GalaryComponent;
