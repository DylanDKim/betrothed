import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PlumOpenCard,
  PlumFilledCard,
} from '../Common/styled/cardstyles/plumcardstyle';
import { PMerr24 } from '../Common/styled/textstyles/Merr24';
import { PMerr18 } from '../Common/styled/textstyles/Merr18';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

export default function InvitationCard(props) {
  const [attending, setAttending] = useState(0);

  return (
    <PlumOpenCard>
      <div>
        <PMerr24>Guest List</PMerr24>
      </div>
      <div>
        {attending === 0 ? (
          <PMerr18>No guests have been invited yet</PMerr18>
        ) : (
          <PMerr18>
            {attending} <br /> guests are attending
          </PMerr18>
        )}
      </div>
      <Link to="/dashboard">
        <PlumFilledButton>add guests</PlumFilledButton>
      </Link>
    </PlumOpenCard>
  );
}
