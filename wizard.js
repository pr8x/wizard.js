$.fn.wizard = function(options) {
	 var defaults = { 
	    nextButton:'Next',
	    backButton:'Back'
	  }; 
	
	var settings = $.extend({}, defaults, options); 

    var fields = $(this).find('fieldset');
    var submit = $(this).find('input[type=submit]');
    
   	$(submit).hide();
   	fields.slice(1).hide();
   	
    $.each(fields,function(index,el) {
    
    	$(el).data("index", index);
    
       	if (index < fields.length-1) {
    		$(el).append("<a class='next'></a>").text(settings.nextButton);
    	}
    	
    	if (index > 0) {
    		$(el).append("<a class='back'></a>").text(settings.backButton);
    	}
    
    });
    
    $('.next').click(function() {
     			var parent = $(this).closest('fieldset');
    
     			var next = $(parent).hide().next('fieldset').fadeIn(500);
     			if ($(next).is(':last-of-type')) {
     				$(submit).show();
     			}
     		});
     		
   	$('.back').click(function() {
	   			var parent = $(this).closest('fieldset');
	   			
	   			$(parent).hide().prev('fieldset').fadeIn(500); 
	   			$(submit).hide();
	   			  		
	   		});
	   
    return this;
}
