module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          my_target: {
            files: {
              'public/dist/adults.min.js': ['public/js/adults.js'],
              'public/dist/details.min.js': ['public/js/details.js'],
              'public/dist/kids.min.js': ['public/js/kids.js'],
              'public/dist/socials.min.js': ['public/js/socials.js']
            }
          }
        },
        sass: {
          dist: {
            files: {
              'public/css/style.css' : 'sass/main.scss'
            }
          }
        },
        watch: {
          sass: {
            files: ['sass/*.scss'],
            tasks: ['sass']
          }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.registerTask('watchFiles', ['watch', 'sass']);

};
