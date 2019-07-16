module.exports = function(grunt){
    // jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // mocha
    grunt.loadNpmTasks('grunt-mocha-test');
    // grunt watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt clear terminal
    grunt.loadNpmTasks('grunt-clear');

    // config
    grunt.initConfig({
        // linter
        jshint: {
            all: ['src/**/*.js'],
        },
        // testing
        mochaTest: {
            src: ['src/**/test/*.js']
        },
        // watch changes
        watch: {
            scripts:{
                files: '**/*.js',
                tasks: ['clear', 'mochaTest', 'jshint'],
            },
        },
    });

    // default task
    grunt.registerTask('default', ['clear', 'mochaTest', 'jshint', 'watch']);
};