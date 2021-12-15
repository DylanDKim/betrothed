import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlueCard } from '../Common/styled/cardstyles/cardstyles';

export default function Dashboard(props) {
  const [numGifts, setNumGifts] = useState(0);

  return (
    <BlueCard>
      <div>
        <h3>Registry</h3>
      </div>
      <div>
        {numGifts === 0 ? (
          <h3>Add gifts</h3>
        ) : (
          <h3>
            {numGifts} {'\n'} are unclaimed
          </h3>
        )}
      </div>
      <Link to="/dashboard">
        <Button>build your registry</Button>
      </Link>
    </BlueCard>
  );
}
