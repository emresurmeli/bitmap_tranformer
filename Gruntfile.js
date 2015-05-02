'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      }
    },
    
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'greet*.js', 'test/*.js']
      },
      options: {
        jshintrc: true 
      }
    },

    watch: {
      files: ['test/*.js', 'greet*.js'],
      tasks: ['jshint:dev', 'simplemocha:dev']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //register the default task
  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint:dev', 'simplemocha:dev']);
};