'use strict';

var assert = require('assert');
var index  = require('../index');



describe('ss-ejs', function () {



    describe('#init (no options passed)', function () {


        it('should return an object containing some details about the html template it handles', function (done) {

            var root = '/user/paulbjensen/apps/example_ss_app_path';
            var init = index.init(root);
            assert.equal('html', init.assetType);
            assert.deepEqual(['ejs'], init.extensions);
            assert.equal('text/html', init.contentType);
            assert(typeof init.compile === 'function');
            done();

        });

        it('should provide a compile function within the object, that will turn a template into html');

    });



});