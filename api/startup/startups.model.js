/*
 * Copyright (c) 2019 by Bank Lombard Odier & Co Ltd, Geneva, Switzerland. This software is subject
 * to copyright protection under the laws of Switzerland and other countries. ALL RIGHTS RESERVED.
 *
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var startupsSchema = new Schema({
    code: {
        type: String,
        unique: false,
        required: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    },
    phone: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true
});

module.exports = startupsSchema;