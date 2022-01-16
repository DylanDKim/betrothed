const axios = require('axios');

module.exports = {
  readCoupleData: function (eventID, success, error) {
    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventID}`)
      .then((result) => {
        success(result.data);
      })
      .catch((err) => {
        error(err);
      });
  },
};
