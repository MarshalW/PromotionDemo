var React = require('react');
var classNames = require('classnames');

var AnimationController=require('../utils/AnimationController');
var AnimationMixin=require('../utils/AnimationMixin');

var ContentComponent=require('../components/ContentComponent');
var GalaryComponent=require('../components/GalaryComponent');

var Page=React.createClass({
	render:function(){
		var pageClassName='dragend-page';
		var page=this.props.data;
		return (
			<li className={pageClassName}>
				<div className='content'>
					{page.components.map(function(component){
						if(component.type=='ContentComponent'){
							return <ContentComponent key={component.id}  data={component} />	
						}
						if(component.type=='GalaryComponent'){
							return <GalaryComponent key={component.id}  data={component} />	
						}

						return <NothingComponent />
					})}
				</div>
			</li>
		);
	}
});

module.exports = Page;

var NothingComponent=React.createClass({
	render:function(){
		return (
			<div></div>
		);
	}
});



