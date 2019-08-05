/*
 * Copyright (c) 2019 by Bank Lombard Odier & Co Ltd, Geneva, Switzerland. This software is subject
 * to copyright protection under the laws of Switzerland and other countries. ALL RIGHTS RESERVED.
 *
 */

var mongoose = require('mongoose');
var startupsSchema = require('./startups.model');

startupsSchema.statics = {
    create: function (data, cb) {
        var startup = new this(data);
        startup.save(cb);
    },

    get: function (query, cb) {
        this.find(query, cb);
    },

    getByCode: function (query, cb) {
        this.findOne(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

var startupsModel = mongoose.model('Startups', startupsSchema);
module.exports = startupsModel;