const axios = require('axios');

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const ordinals = {
  1: 'st',
  2: 'nd',
  3: 'rd',
};

const makeDate = () => {};

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

        // create time strings for clean representation
        const eventDate = new Date(date);
        const dayOfMonth = eventDate.getDate();
        const ordinal = ordinals[dayOfMonth] || 'th';
        const dateOfEvent = `
          ${days[eventDate.getDay()]},
          ${months[eventDate.getMonth()]}
           ${dayOfMonth}${ordinal}, ${eventDate.getFullYear()}
        `;
        const rsvpDate = new Date(rsvpDeadline);
        const rsvp = `
        ${days[rsvpDate.getDay()]},
        ${months[rsvpDate.getMonth()]}
         ${dayOfMonth}${ordinal}, ${rsvpDate.getFullYear()}
        `;
        const eventTime = eventDate.toLocaleTimeString().split(':00 ');

        const transformedData = {
          coupleName1,
          coupleName2,
          date: dateOfEvent,
          time: `${eventTime[0]} ${eventTime[1]}`,
          venue,
          address: `${addressLine1}, ${addressLine2}`,
          location: `${city}, ${state}, ${zip}`,
          rsvpDeadline: rsvp,
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
