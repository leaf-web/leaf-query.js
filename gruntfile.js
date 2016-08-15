module.exports = function(grunt) {
	grunt.initConfig({
	    concat: {
			js: {
				src: [
					'src/leaf-query.prefix.js',
					'src/modules/traversing.js',
					'src/modules/manipulation.js',
					'src/modules/effects.js',				
					'src/modules/events.js',	
					'src/leaf-query.suffix.js'
				],
				dest: 'builds/leaf-query.full.js'
			}
		},
		jshint: {
			files: ['builds/leaf-query.full.js']
		},
		uglify: {
			js: {
				src: 'builds/leaf-query.full.js',
				dest: 'builds/leaf-query.min.js'
			}
		}		
	});

 	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-contrib-uglify');	

	grunt.registerTask('default', ['concat', 'jshint', 'uglify']);
}