var AnimationMixin={
	getAnimData:function(component){
		var anim='';
		var animDelay=0;

		if(component.animation){
			anim=component.animation.type+' '+(component.animation.duration/1000)+'s '+(component.animation.delay/1000)+'s';
			animDelay=component.animation.delay;
		}

		return {
			anim:anim,
			animDelay:animDelay+100
		}
	}
}

module.exports=AnimationMixin;