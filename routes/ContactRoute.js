const router = require('express').Router();
const contactController = require('../controllers/mailControllers/contactController');





router.post('/contact', contactController.users_contact_me_to_my_email_from_the_frontEND_form);







module.exports = router;