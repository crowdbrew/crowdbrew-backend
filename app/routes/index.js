var express = require('express');
var router = express.Router();

var auth = require('./auth.js');

var backings = require('./v1/backings.js');
var breweries = require('./v1/breweries.js');
var campaignPosts = require('./v1/campaignPosts.js');
var campaigns = require('./v1/campaigns.js');
var requests = require('./v1/requests.js');
var requestVotes = require('./v1/requestVotes.js');
var users = require('./v1/users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */

router.get('/api/v1/backings', backings.getAll);
router.get('/api/v1/backings/:id', backings.getOne);
router.post('/api/v1/backings', backings.create);
router.put('/api/v1/backings/:id', backings.update);
router.delete('/api/v1/backings/:id', backings.delete);

router.get('/api/v1/breweries', breweries.getAll);
router.get('/api/v1/breweries/:id', breweries.getOne);
router.post('/api/v1/breweries/', breweries.create);
router.put('/api/v1/breweries/:id', breweries.update);
router.delete('/api/v1/breweries/:id', breweries.delete);

router.get('/api/v1/campaigns', campaigns.getAll);
router.get('/api/v1/campaigns/:id', campaigns.getOne);
router.post('/api/v1/campaigns/', campaigns.create);
router.put('/api/v1/campaigns/:id', campaigns.update);
router.delete('/api/v1/campaigns/:id', campaigns.delete);

/* TODO sub-resource campaignPosts as campaign/:id/posts/:id 

router.get('/api/v1/campaigns', campaigns.getAll);
router.get('/api/v1/campaigns/:id', campaigns.getOne);
router.post('/api/v1/campaigns/', campaigns.create);
router.put('/api/v1/campaigns/:id', campaigns.update);
router.delete('/api/v1/campaigns/:id', campaigns.delete); */

router.get('/api/v1/requests', requests.getAll);
router.get('/api/v1/requests/:id', requests.getOne);
router.post('/api/v1/requests/', requests.create);
router.put('/api/v1/requests/:id', requests.update);
router.delete('/api/v1/requests/:id', requests.delete);

/* TODO sub-resource campaignPosts as requests/:id/votes/:id 

router.get('/api/v1/requests', requests.getAll);
router.get('/api/v1/requests/:id', requests.getOne);
router.post('/api/v1/requests/', requests.create);
router.put('/api/v1/requests/:id', requests.update);
router.delete('/api/v1/requests/:id', requests.delete); */

router.get('/api/v1/users', users.getAll);
router.get('/api/v1/users/:id', users.getOne);
router.post('/api/v1/users/', users.create);
router.put('/api/v1/users/:id', users.update);
router.delete('/api/v1/users/:id', users.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', users.getAll);
router.get('/api/v1/admin/users/:id', users.getOne);
router.post('/api/v1/admin/users/', users.create);
router.put('/api/v1/admin/users/:id', users.update);
router.delete('/api/v1/admin/users/:id', users.delete);

module.exports = router;