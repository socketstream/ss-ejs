'use strict';



// Dependencies
//
var assert = require('assert');
var ejs    = require('ejs');
var fs     = require('fs');
var index  = require('../index');



describe('ss-ejs', function () {



    describe('#init (no options passed)', function () {

        var root, init;

        before(function (done) {
            root = '/user/paulbjensen/apps/example_ss_app_path';
            init = index.init(root);
            done();
        });


        it('should return an object containing some details about the html template it handles', function (done) {

            assert.equal('html', init.assetType);
            assert.deepEqual(['ejs'], init.extensions);
            assert.equal('text/html', init.contentType);
            assert(typeof init.compile === 'function');
            done();

        });

        it('should provide a compile function within the object, that will turn a template into html', function (done) {

            var ejsTemplatePath = __dirname + '/seed_data/simple.ejs';
            var options         = {title: 'My first blog post'};
            fs.readFile(ejsTemplatePath, 'utf8', function (err, data) {
                var expectedResult  = ejs.render(data, options);
                init.compile(ejsTemplatePath, options, function (output) {
                    assert.equal(output, expectedResult);
                    done(err);
                });
            });

        });

    });



});