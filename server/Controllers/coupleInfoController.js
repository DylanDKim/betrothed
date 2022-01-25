const model = require('../Models/coupleInfoModels');

module.exports = {
  get: function (req, res) {
    const { eventID } = req.params;
    model.readCoupleData(
      eventID,
      (data) => {
        res.status(200).json(data);
      },
      (err) => {
        res.status(404).send(err);
      }
    );
  },
};
