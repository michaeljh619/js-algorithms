module.exports = function(grunt){
    // jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // mocha
    grunt.loadNpmTasks('grunt-mocha-test');
    // grunt watch
    grunt.loadNpmTasks('grunt-contrib-watch');

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
                tasks: ['jshint'],
            },
        },
    });

    // default task
    grunt.registerTask('default', ['mochaTest', 'jshint', 'watch']);
};