module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: ['client/**/*.js'],
        dest: 'client/build/<%= pkg.name %>.js'
      }
    },

    nodemon: {
      dev: {
        script: 'server/app.js'
      }
    },

    uglify: {
      options: {  
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        files: {
          'client/build/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>']
        }
      }
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'server/**/*.js',
        'client/**/*.js',
      ],
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      build: {
        files: {
          'client/build/style.min.css': 'client/css/*.css'
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'client/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'client/css/*.css',
        tasks: ['cssmin']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'nodemon']);

  grunt.registerTask('test', [
    'jshint',
  ]);


};