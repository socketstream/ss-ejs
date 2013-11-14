'use strict';



// Dependencies
//
var fs  = require('fs'),
    ejs = require('ejs');



// The public API for the SS-EJS module,
// loads the wrapper so that ejs templates
// in your SocketStream app can be 
// compiled to HTML
//
// @params  root    String   The path of the SocketStream app, ss.root
// @params  config  Object   configuration options for EJS
//
// @returns Object
//
exports.init = function (root, config) {
  


    // If a config object isn't passed, create an empty object
    //
    if (!(config && typeof(config) === 'object')) {
        config = {};
    }



    // Set config options on EJS library
    //
    for (var option in config) {
        ejs[option] = config[option];
    }



    return {

        name: 'Ejs',

        extensions: ['ejs'],

        assetType: 'html',

        contentType: 'text/html',

        // This function converts the EJS into html
        //
        // @params  path      String    The path of the ejs template
        // @params  options   Object    Options for the ejs template
        // @params  cb        Function  The function to execute when finished
        // 
        // @returns void
        //
        compile: function (path, options, cb) {
            
        }

    };


};