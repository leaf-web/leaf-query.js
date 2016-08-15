/* 
   #each
   ========================================================================== */

/**
 * See: http://api.jquery.com/each/
 */

each: function(cb) {
	Array.prototype.forEach.call(els, function(el, index) {
		cb(el, index);
	});
	return this;
},

/* 
   #eq
   ========================================================================== */

/**
 * See: http://api.jquery.com/eq/
 */

eq: function(index) {	
	return new $(els[index]); 
},

/* 
   #find
   ========================================================================== */

/**
 * See: http://api.jquery.com/find/
 */

find: function(selector) {	
	return new $(selector, els[0]); 
},

/* 
   #first
   ========================================================================== */

/**
 * See: http://api.jquery.com/first/
 */

first: function() {	
	return new $(els[0]); 
},

/* 
   #last
   ========================================================================== */

/**
 * See: http://api.jquery.com/last/
 */

last: function() {	
	return new $(els[els.length - 1]); 
},

/* 
   #next
   ========================================================================== */

/**
 * See: http://api.jquery.com/next/
 */

next: function() {	
	return new $(els[0].nextElementSibling); 
},

/* 
   #parent
   ========================================================================== */

/**
 * See: http://api.jquery.com/parent/
 */

parent: function() {	
	return new $(els[0].parentNode); 
},