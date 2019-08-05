/*
 * Copyright (c) 2019 by Bank Lombard Odier & Co Ltd, Geneva, Switzerland. This software is subject
 * to copyright protection under the laws of Switzerland and other countries. ALL RIGHTS RESERVED.
 *
 */

var Startups = require('./startups.dao');

exports.createStartup = function (req, res, next) {
    var startup = {
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        phone: req.body.phone
    };

    Startups.create(startup, function (err, startup) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Startup created successfully"
        })
    })
}

exports.getStartups = function (req, res, next) {
    Startups.get({}, function (err, startups) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json(startups)
    })
}

exports.getStartup = function (req, res, next) {
    Startups.getByCode({code: req.params.code}, function (err, startups) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json(startups)
    })
}

exports.updateStartup = function (req, res, next) {
    var startup = {
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        phone: req.body.phone
    }
    Startups.update({code: req.params.code}, startup, function (err, startup) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Startup updated successfully"
        })
    })
}

exports.removeStartup = function (req, res, next) {
    Startups.delete({code: req.params.code}, function (err, startup) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Startup deleted successfully"
        })
    })
}
