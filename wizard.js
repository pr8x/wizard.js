$.fn.wizard = function(options) {

	var defaults = { 
	    backButton: 'Back',
	    nextButton: 'Next',
	    willDisappear: function() { return true; },
	    didDisappear: null,
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
     			var parent = $(this).closest('fieldset');
     			
     			if (!settings.willDisappear(parent)) {
     				return;
     			}
    
     			var next = $(parent).hide().next('fieldset').fadeIn(500);
     			
     			if (settings.didDisappear)
     				settings.didDisappear(parent);
     			
     			if ($(next).is(':last-of-type')) {
     				$(submit).show();
     			}
     		});
     		
   	$('.back').click(function() {
	   			var parent = $(this).closest('fieldset');
	   			
	   			if (!settings.willDisappear(parent)) {
	   				return;
	   			}
	   			
	   			$(parent).hide().prev('fieldset').fadeIn(500); 
	   			
	   			if (settings.didDisappear)
	   				settings.didDisappear(parent);
	   			
	   			$(submit).hide();
	   			  		
	   		});
	   
    return this;
}


