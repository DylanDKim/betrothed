import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BlueOpenCard,
  BlueFilledCard,
} from '../Common/styled/cardstyles/bluecardstyle';

export default function Dashboard(props) {
  const [numGifts, setNumGifts] = useState(0);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Registry</Card.Title>
        {numGifts === 0 ? (
          <h3>Add gifts</h3>
        ) : (
          <h3>
            {numGifts} <br /> are unclaimed
          </h3>
        )}
        <Link to="/registryadd">
          <Button>build your registry</Button>
        </Link>
      </Card.Body>
    </Card>
    // <BlueOpenCard>
    //   <div>
    //     <h3>Registry</h3>
    //   </div>
    //   <div>
    //     {numGifts === 0 ? (
    //       <h3>Add gifts</h3>
    //     ) : (
    //       <h3>
    //         {numGifts} <br /> are unclaimed
    //       </h3>
    //     )}
    //   </div>
    //   <Link to="/dashboard">
    //     <Button>build your registry</Button>
    //   </Link>
    // </BlueOpenCard>
  );
}
