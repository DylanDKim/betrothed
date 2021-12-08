const router = require('express');

router.get('/', (req, res) => {
  res.status(200).send('hello from /api/guests');
});

module.exports = router;
