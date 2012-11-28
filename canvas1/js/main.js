(function($, undefined) {
    $.widget('draw.fan', {
    	options:{
    	},
    	_create:function(){
    		var self = this;
    		this.numOfFans = this.element.children().length;
    		this.fans = [];
    		this.spinAngle = 180 / this.numOfFans;
    		this.element.children().each(function(){ self.fans.push($(this)); })

    	},	

    	_init:function(){
    		var self  = this;
    		self.setDegree();
    	},
    	setDegree:function(){
    		var self = this;
    		$.each( self.fans ,function(i, v){
    			$(this).css('transform', 'rotate('+i * self.spinAngle +'deg)');
    		});
    	}
	});
})(jQuery);

$(document).ready(function(){
	$('#fan-draw').fan();
});
