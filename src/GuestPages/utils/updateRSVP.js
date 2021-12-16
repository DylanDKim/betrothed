import axios from 'axios';

const { URL } = require('../../../config/private.config');

const updateRSVP = (isAttending, message, id, callback) => {
  const data = {
    rsvpStatus: isAttending,
    rsvpNote: message,
  };

  axios({
    method: 'put',
    url: `${URL}/events/61b79b9e0ac02dbe3e12fd1b/guests/${id}`,
    data,
  })
    .then(() => {
      callback(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default updateRSVP;
