/*
 * Copyright (c) 2019 by Bank Lombard Odier & Co Ltd, Geneva, Switzerland. This software is subject
 * to copyright protection under the laws of Switzerland and other countries. ALL RIGHTS RESERVED.
 *
 */

var Startups = require('./startups.controller');

module.exports = function (router) {
    router.post('/create', Startups.createStartup);
    router.get('/get', Startups.getStartups);
    router.get('/get/:code', Startups.getStartup);
    router.put('/update/:code', Startups.updateStartup);
    router.options('/remove/:code', Startups.removeStartup);
    router.delete('/remove/:code', Startups.removeStartup);
}