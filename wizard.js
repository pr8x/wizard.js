$.fn.wizard = function(options) {

	var defaults = { 
	    backButton: 'Back',
	    nextButton: 'Next',
	    willSwitch: function() { return true; },
	  }; 

  	var settings = $.extend({}, defaults, options); 
    
    var fields = $(this).find('fieldset');
    var submit = $(this).find('input[type=submit]');
    
   	$(submit).hide();
   	fields.slice(1).hide();
   	
    $.each(fields,function(index,el) {
    
    	$(el).data("index", index);
    
       	if (index < fields.length-1) {
    		$(el).append("<a class='next'>"+settings.nextButton+"</a>");
    	}
    	
    	if (index > 0) {
    		$(el).append("<a class='back'>"+settings.backButton+"</a>");
    	}
    
    });
    
    $('.next').click(function() {
     			var current = $(this).closest('fieldset');
     			var next = current.next('fieldset');
     			
     			if (!settings.willSwitch(current,next)) {
     				return;
     			}
     			
			    current.hide();
			    next.fadeIn(500);

     			if (next.is(':last-of-type')) {
     				submit.show();
     			}
     		});
     		
   	$('.back').click(function() {
	   			var current = $(this).closest('fieldset');
	   			var previous = current.prev('fieldset');
	   			
	   			if (!settings.willSwitch(current,previous)) {
	   				return;
	   			}
	   			current.hide();
	   			previous.fadeIn(500); 
	   
	   			submit.hide();		
	   		});
	   
    return this;
}


