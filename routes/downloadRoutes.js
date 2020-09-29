const router = require('express').Router();
const downloadController = require('../controllers/downloadController');



router.get('/mp3', downloadController.download_mp3)
router.get('/mp4', downloadController.download_mp4);



module.exports = router;
