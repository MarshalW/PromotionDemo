var $ = require('jquery');

$(function() {
	new Dragend($("#demo").get(0), {
		afterInitialize: function() {
			$("#demo").css("visibility", "visible");
		}
	});

	new Dragend($("#innerDemo").get(0), {
		pageClass: "page",
		stopPropagation: true,
		onDragStart:function(e){
			alert(e);
			// return true;
		}
	});
});
