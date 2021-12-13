import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InvitationCard(props) {
  const [numGifts, setNumGifts] = useState(0);

  return (
    <div>
      <div>
        <h3>Invitation</h3>
      </div>
      <div>
        {numGifts > 0 ? (
          <h3>Customize your wedding website</h3>
        ) : (
          <h3>
            Your customized {'\n'} invite has been {'\n'} sent to guests
          </h3>
        )}
      </div>
      <Link to="/dashboard">
        <Button>browse themes</Button>
      </Link>
    </div>
  );
}
