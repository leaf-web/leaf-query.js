/* 
   #show
   ========================================================================== */

/**
 * See: http://api.jquery.com/show/
 */

show: function() {	
	this.each(function(el) {
		el.style.display = '';
	});
	return this;
},

/* 
   #hide
   ========================================================================== */

/**
 * See: http://api.jquery.com/hide/
 */

hide: function() {	
	this.each(function(el) {
		el.style.display = 'none';
	});
	return this;
},