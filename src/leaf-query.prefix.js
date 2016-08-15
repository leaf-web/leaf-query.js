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
	    	