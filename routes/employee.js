const router = require('express').Router();

const handle = require('../handlers');

router.route('/').get(handle.showEmployees); 

router.route('/:id').get(handle.showEmployee);
router.post('/new', handle.newEmployee);
router.put('/update', handle.updateEmployee);
router.put('/delete', handle.deleteEmployee);






module.exports = router;