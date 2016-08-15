/* 
   #on
   ========================================================================== */

/**
 * See: http://api.jquery.com/on/
 */

on: function(event, cb) {	
	this.each(function(el) {
		el.addEventListener(event, cb, false);
	});
	return this;
},

/* 
   #un
   ========================================================================== */

/**
 * See: http://api.jquery.com/un/
 */

un: function(event, cb) {	
	this.each(function(el) {
		el.removeEventListener(event, cb, false);
	});
	return this;
},

/* 
   #one
   ========================================================================== */

/**
 * See: http://api.jquery.com/one/
 */

one: function(event, cb) {	
	this.each(function(el) {
		el.addEventListener(event, function(e) {
			e.target.removeEventListener(e.type, arguments.callee);
			return cb(e);
		}, false);
	});
	return this;
}

