if(!window.jQuery) {
	/**
	 * @function $
	 * @since 0.1.1
	 * @param  {string} selector The selector.
	 * @param  {string} context The context.
	 * @return {Object} The functions.
	 */
	window.$ = function(selector, context) {
		//
		// Select the elements.
		//
		var els = (selector.substring) ? (context || document).querySelectorAll(selector) : [selector];

	    return {
	    	
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
/* 
   #html
   ========================================================================== */

/**
 * See: http://api.jquery.com/html/
 */

html: function(value) {	
	if(value) {
		this.each(function(el) {
			el.innerHTML = value;
		});
		return this;
	}
	return this.els[0].innerHTML;
},

/* 
   #text
   ========================================================================== */

/**
 * See: http://api.jquery.com/text/
 */

text: function(value) {	
	if(value) {
		this.each(function(el) {
			el.innerText = value;
		});
		return this;
	}
	return this.els[0].innerText;
},

/* 
   #attr
   ========================================================================== */

/**
 * See: http://api.jquery.com/attr/
 */

attr: function(name, value) {	
	if(value) {
		this.each(function(el) {
			el.setAttribute(name, value);
		});
		return this;
	}
	return this.els[0].getAttribute(name);
},

/* 
   #removeAttr
   ========================================================================== */

/**
 * See: http://api.jquery.com/removeAttr/
 */

removeAttr: function(name) {		
	if(name) {
		this.each(function(el) {
			el.removeAttribute(name);
		});
	}
	return this;
},

/* 
   #val
   ========================================================================== */

/**
 * See: http://api.jquery.com/val/
 */

val: function(name, value) {	
	if(value) {
		this.each(function(el) {
			el.value = value;
		});
		return this;
	}
	return els[0].value;
},

/* 
   #css
   ========================================================================== */

/**
 * See: http://api.jquery.com/css/
 */

css: function(name, value) {	
	if(value) {
		this.each(function(el) {
			el.style[name] = value;
		});
		return this;
	}
	return els[0].style[name];
},

/* 
   #addClass
   ========================================================================== */

/**
 * See: http://api.jquery.com/addClass/
 */

addClass: function(className) {	
	this.each(function(el) {
		 el.classList.add(className);
	});
	return this;
},

/* 
   #removeClass
   ========================================================================== */

/**
 * See: http://api.jquery.com/removeClass/
 */

removeClass: function(className) {	
	this.each(function(el) {
		 el.classList.remove(className);
	});
	return this;
},

/* 
   #hasClass
   ========================================================================== */

/**
 * See: http://api.jquery.com/hasClass/
 */

hasClass: function(className) {	
	return els[0].classList.contains(className);
},

/* 
   #before
   ========================================================================== */

/**
 * See: http://api.jquery.com/before/
 */

before: function(html) {	
	this.each(function(el) {
		 el.insertAdjacentHTML("beforebegin", html);
	});
	return this;
},

/* 
   #after
   ========================================================================== */

/**
 * See: http://api.jquery.com/after/
 */

after: function(html) {	
	this.each(function(el) {
		 el.insertAdjacentHTML("afterend", html);
	});
	return this;
},

/* 
   #append
   ========================================================================== */

/**
 * See: http://api.jquery.com/append/
 */

append: function(html) {	
	this.each(function(el) {
		 parent.appendChild(el);
	});
	return this;
},

/* 
   #prepend
   ========================================================================== */

/**
 * See: http://api.jquery.com/prepend/
 */

prepend: function(html) {	
	this.each(function(el) {
		 parent.insertBefore(el, parent.firstChild);
	});
	return this;
},

/* 
   #empty
   ========================================================================== */

/**
 * See: http://api.jquery.com/empty/
 */

empty: function(html) {	
	this.each(function(el) {
		el.innerHTML = '';
	});
	return this;
},

/* 
   #remove
   ========================================================================== */

/**
 * See: http://api.jquery.com/remove/
 */

remove: function(html) {	
	this.each(function(el) {
		el.parentNode.removeChild(el);
	});
},

/* 
   #replaceWith
   ========================================================================== */

/**
 * See: http://api.jquery.com/replaceWith/
 */

replaceWith: function(html) {	
	this.each(function(el) {
		el.outerHTML = html;
	});
	return this;
},
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


    	};
	};
}
