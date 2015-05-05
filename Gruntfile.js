'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    simplemocha: {
      dev: {
        src: ['tests/*.js']
      }
    },
    
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'lib/*.js', 'tests/*.js']
      },
      options: {
        jshintrc: true 
      }
    },

    watch: {
      files: ['tests/*.js', 'lib/*.js'],
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