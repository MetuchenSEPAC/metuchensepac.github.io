module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //TASK CONFIGURATIONS AND OPTIONS
    //For general documentation on task congigurations, see: http://gruntjs.com/configuring-tasks
    //For specific task requirements and options, see individual task pages (noted at the bottom where tasks are loaded).

    //LESS for css pre-processing (NOTE: multitasks like this less task require a target - I'm using default)
    less: {
      options: {
        paths: ['public/less']
      },
      default: {
        files: [
          // looking for all .less files directly under source/_resources/less, excpect common and shame
          {
            expand: true,
            cwd: 'public/less',
            src: ['*.less'],
            dest: 'public/css',
            ext: '.css'
          }
        ]
      }
    }, // less

    //WATCH to run some of the above automatically on file changes 
    watch: {
      less: {
        files: ['public/less/**'],
        tasks: ['less']
      }
    }

  });

  //LOAD REQUIRED TASKS
  grunt.loadNpmTasks('grunt-contrib-less');         // https://npmjs.org/package/grunt-contrib-less
  grunt.loadNpmTasks('grunt-contrib-watch');        // https://npmjs.org/package/grunt-contrib-watch

  // Register Default task(s).
  //NOTE: when testing tasks, it's easiest to remove the watch task as the only way to stop the watch is to close the cmd window.
  grunt.registerTask('default', ['less']);

  
};