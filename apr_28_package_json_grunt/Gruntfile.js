'use strict';
// TODO: add gruntfile and a package.json file to previous assignment.

// TODO: package.json include all the dependencies/dev dependencies for project.

// TODO: The Gruntfile should contain a task to run the mocha/chai test as well as run jshint on all of your code. This should include your tests and your Gruntfile.

// TODO: Submit as a pull request to your own repo that contains just the code for this assingment(Gruntfile, package.json and jshint config file if applicable).

// TODO: For an extra point, set up a watch task that reruns your tests/jshint/jscs on changes to any of your files (minus package.json)

// TODO: For another bonus point move the jshint options (node and globals) into a jshintrc file that you can transfer between projects.
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		jshint: {
			dev: {
				src: ['Gruntfile.js', './lib/greet*.js', '.test/**/*.js']
			},
			options: {
				node: true,
				globals: {
					describe: true,
					it: true,
					before: true,
					after: true,
					beforeEach: true,
					afterEach: true
				}
			}
		},
		simplemocha: {
			dev: {
				src: ['./test/*.js']
			},
			options: {
				globals: ['should'],
			},
		},
		watch: {
			files: ['**/*'],
			tasks: ['test'],
		},
	});

	grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
	grunt.registerTask('default', ['test']);
};