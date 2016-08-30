# ![logo](docs/images/logo.jpg)-query.js

Leaf-query.js is a jQuery-like selector engine for leaf.js.

* [Contribution Guidelines](https://github.com/leaf-web/leaf.seed/blob/master/CONTRIBUTING.md)
* [Gitter](https://gitter.im/leaf-js/lobby)

## Installing Leaf-query

Install using Bower:

	$ bower install --save leaf-query

Install using Npm:

	$ npm install --save leaf-query

## Building Leaf.js

Once you have setup your environment, run:

    grunt

## Quick Example

	<html>
		<body>
			<p>Hello World</p>

			<script src="scripts/leaf-query.min.js"></script>
				$("p").on('click', function(e) {
					$(this).hide();
				});
			<script>
		</body>
	</html>

## Browser Support 

| Browser            | Version |
| ------------------ | ------- |
| Internet Explorer  | 10+     |
| Edge               | 12+     |
| Firefox            | 42+     |
| Chrome             | 45+     |
| Safari             | 9+      |
| Opera              | 34+     |
| iOS Safari         | 8.4+    |
| Android Browser    | 4.4+    |
| Chrome for Android | 47+     |
