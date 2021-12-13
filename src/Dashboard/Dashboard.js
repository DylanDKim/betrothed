import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistryCard from './RegistryCard';
import InvitationCard from './InvitationCard';
import GuestListCard from './GuestListCard';

export default function Dashboard(props) {
  const [firstName, setFirstName] = useState('');
  const [partnerFirstName, setPartnerFirstName] = useState('');
  const [daysLeft, setDaysLeft] = useState('');

  return (
    <div>
      <div>
        <h1>
          {firstName} and {partnerFirstName}
        </h1>
        <h2>{daysLeft} days left!</h2>
      </div>
      <img alt="dashboard cover" />
      <div>Progress bar</div>
      <h3>Planning tools</h3>
      <div>
        <RegistryCard />
        <InvitationCard />
        <GuestListCard />
      </div>
      <Link to="/dashboard">
        <Button>see your dashboard</Button>
      </Link>
    </div>
  );
}
