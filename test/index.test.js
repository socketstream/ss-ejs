'use strict';



// Dependencies
//
var assert = require('assert');
var index  = require('../index');
var ejs    = require('ejs');



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

            var ejsTemplate     = '<h1><%= title %></h1>';
            var options         = {title: 'My first blog post'};
            var expectedResult  = ejs.render(ejsTemplate, options);
            init.compile(ejsTemplate, options, function (output) {
                assert.equal(output, expectedResult);
                done();
            });

        });

    });



});