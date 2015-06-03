var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AnimationController=assign({}, EventEmitter.prototype, {
	timers:[],
	addTimer:function(timer){
		this.timers.push(timer);
	},
	clear:function(){
		this.timers.forEach(function(timer){
			clearTimeout(timer);
		});

		this.timers=[];
		this.emit('clear-animation');
	},
	afterClear:function(){
		this.emit('after-clear-animation');	
	}
});

module.exports = AnimationController;