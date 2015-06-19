
var React = require('react');

var AnimationController=require('../utils/AnimationController');
var Page=require('../components/Page');

var Swiper=React.createClass({
	animationCallback:function(animElements){
		$(animElements).each(function(index,element){
			var animData=$(element).attr('data-anim');	
			$(element).css({
				'-webkit-animation':animData						
			});

			var delay=$(element).attr('data-anim-delay');
			var timer=setTimeout(function(){
				$(element).css({
					visibility:'visible'	
				});						
			},delay);
			AnimationController.addTimer(timer);
		});
	},	
	componentDidMount:function(){
		var swipe=this;

		$(React.findDOMNode(this)).parent().dragend({
			page:swipe.props.data.startPage,
			afterInitialize: function() {
				$(this.container).addClass('full-screen-swiper');
				$(this.container).css("visibility", "visible");
				$(this.container).find('.anim').css('visibility', 'hidden');
				swipe.animationCallback($(this.pages[this.page]).find('.anim'));

				this.lastPage=this.page+1;
			},
			onSwipeStart:function(container,element,page,direction){
				if(!this.swipeStarted){
					this.swipeStarted=true;	

					if(page==1 && direction=='right'){
						return;
					}

					if(page==this.pageCount && direction=='left'){
						return;
					}

					// TODO 上下翻页的情况

					AnimationController.clear();
				}
			},
			onSwipeEnd:function(container,element,page){
				// alert('swipe end');
				if(this.swipeStarted && page!=this.lastPage){
					this.lastPage=page;
					$('.dragend-page').find('.anim').css({
						'visibility':'hidden',
						'-webkit-animation':''
					});

					swipe.animationCallback($(element).find('.anim'));
					this.swipeStarted=false;

					AnimationController.afterClear();
				}
			},
			onDragEnd:function(){
				// alert('drag end');
			}
		});
	},
	render:function(){
		var pages=this.props.data;
		return(
			<ul>
				{pages.map(function(page){
					return <Page key={page.id} data={page} />
				})}
			</ul>
		);
	}
});

module.exports = Swiper;

