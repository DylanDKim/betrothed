import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistryCard from './RegistryCard';
import InvitationCard from './InvitationCard';
import GuestListCard from './GuestListCard';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import BlueInput from '../Common/styled/inputstyles/inputstyle';
import { OnboardingImageFit } from '../Common/styled/imagestyles/imagestyle';
import OnboardingTopSpacer from '../Common/styled/spacers/onboardingspacer';
import CardFormat from '../Common/styled/cardstyles/cardformat';

export default function Dashboard(props) {
  const [firstName, setFirstName] = useState('John');
  const [partnerFirstName, setPartnerFirstName] = useState('Jane');
  const [daysLeft, setDaysLeft] = useState('12');

  return (
    <div>
      <div>
        <h1>
          {firstName} and {partnerFirstName}
        </h1>
        <h2>{daysLeft} days left!</h2>
      </div>
      <img alt="dashboard cover" />
      <ProgressBar now={0} />
      <h3>Planning tools</h3>
      <CardFormat>
        <GuestListCard />
        <InvitationCard />
        <RegistryCard />
      </CardFormat>
    </div>
  );
}
