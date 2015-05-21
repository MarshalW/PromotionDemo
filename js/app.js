$(function() {

	$("#demo").dragend({
		afterInitialize: function() {
			$(this.container).css("visibility", "visible");
			var pages=$('.dragend-page');

			for(var i=0;i<pages.length;i++){
				if(i>0){
					$(pages[i]).find('.anim').css('visibility', 'hidden');
				}
			}
		},
		onSwipeStart:function(container,element,page,direction){
			this.currentPage=page;
		},
		onSwipeEnd:function(container,element,page){
			if(page!=this.currentPage){
				$('.dragend-page').find('.anim').css({
					'visibility':'hidden',
					'-webkit-animation':''
				});

				this.settings.animationCallback($(element).find('.anim'));
			}

			this.currentPage=page;
		},
		animationCallback:function(animElements){
			$(animElements).css('-webkit-animation','fade 0.5s');

			$(animElements).css({
				visibility:'visible'
			});
		}		
	});

	$("#innerDemo").dragend({
		pageClass: "page",
		stopPropagation: true
	});
});
