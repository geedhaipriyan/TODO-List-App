const express = require('express');

const router = express.Router();
const homeController = require('../controllers/appHomeController');


console.log('router loaded');

router.get('/', homeController.home);
router.post('/create-task', homeController.create);
router.post('/remove', homeController.remove);

module.exports  =   router;