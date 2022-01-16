const axios = require('axios');

module.exports = {
  readCoupleData: function (eventID, success, error) {
    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventID}`)
      .then((result) => {
        const {
          coupleName1,
          coupleName2,
          date,
          venue,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          rsvpDeadline,
          inviteMessage,
          bannerPhotoURL,
          galleryPhotos,
          colors,
        } = result.data;

        const transformedData = {
          coupleName1,
          coupleName2,
          date,
          venue,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          rsvpDeadline,
          inviteMessage,
          bannerPhotoURL,
          galleryPhotos,
          colors,
        };
        success(transformedData);
      })
      .catch((err) => {
        error(err);
      });
  },
};
