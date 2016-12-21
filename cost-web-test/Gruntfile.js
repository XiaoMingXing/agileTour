module.exports = function (grunt) {
    var path = require('path');
    // Project configuration.
    grunt.initConfig({
        mkdir: {
            all: {
                options: {
                    create: ['./target/report']
                }
            }
        },
        'protractor-cucumber-html-report': {
            options: {
                dest: './target/report',
                output: './e2e.html'
            },
            default: {
                options: {
                    testJSONResultPath: './target/report/e2e.json'
                }
            }
        },
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:custom'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        },
        express: {
            custom: {
                options: {
                    port: 9000,
                    bases: '/app',
                    debug: true,
                    script: '../cost-web-ui/server.js'
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'specs/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                mangleProperties: true,
                reserveDOMCache: true
            }
        },
        clean: {
            /*options: {
             force: true
             },*/
            src: ['.tmp/**']
        },
        useminPrepare: {
            html: ['app/index.html', 'app/home.html'],
            options: {
                dest: 'app/dist',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglify']
                        }
                    }
                }
            }
        },
        usemin: {
            html: ['app/*.html'],
            js: ['app/dist/{,*/}*.js'],
            options: {
                blockReplacements: {
                    js: function (block) {
                        console.log(block);
                        return '<script type="application/javascript" src="dist/' + block.dest + '"></script>'
                    }
                }
            }
        },
        'protractor-cucumber-html-report': {
            options: {
                dest: './target/report',
                output: './e2e.html'
            },
            default:{
                options:{
                    testJSONResultPath:'./target/report/e2e.json'
                }
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: "cucumber-test/config/protractor.conf.js",
                noColor: true

            },
            e2e: {
                options: {
                    keepAlive: true,
                    args: {
                        seleniumPort: 4444
                    }
                }
            },
            terminate: {
                options: {
                    keepAlive: false
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'mochawesome', //You need to change this !
                    colors: true,
                    summery: true,
                    captureFile: 'target/test-report.html',
                    quiet: false,
                    clearRequireCache: true
                },
                src: ['nodejs-api-test/supertest/*.js'],
                excludes: ['plugins']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    /*grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-clean');*/
    //grunt.loadNpmTasks('grunt-protractor-runner');
    //grunt.loadNpmTasks('grunt-usemin');

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-test');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jshint']);
    grunt.registerTask('int', 'int test for ci', function () {
        process.env.TOMCAT_PORT = 10010;
        grunt.task.run('int-local')
    });
    grunt.registerTask('int-local', ['mochaTest']);
    grunt.registerTask('e2e', 'e2e test for ci', function () {
        process.env.EXPRESS_PORT = 10086;
        grunt.task.run('express:custom')
        grunt.task.run('e2e-local')
    });
    grunt.registerTask('e2e-local', ['mkdir', 'protractor:e2e', 'protractor-cucumber-html-report:default']);
    grunt.registerTask('minify', ['useminPrepare', 'concat:generated', 'uglify:generated', 'usemin', 'clean']);
    grunt.registerTask('min', ['uglify:generated']);
};
