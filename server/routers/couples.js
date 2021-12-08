const router = require('express');

router.get('/', (req, res) => {
  res.status(200).send('hello from /api/couples');
});

module.exports = router;
