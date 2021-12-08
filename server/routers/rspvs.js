const router = require('express');

router.get('/', (req, res) => {
  res.status(200).send('hello from /api/rsvps');
});

module.exports = router;
