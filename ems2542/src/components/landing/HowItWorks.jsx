import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EscrowTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Step 1: Create an Account */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 1"
      >
        <h3 className="vertical-timeline-element-title">Create an Account</h3>
        <p>Begin by registering for an account on our platform. Provide your details and set up payment preferences.</p>
      </VerticalTimelineElement>

      {/* Step 2: Upload Funds to the Account */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 2"
      >
        <h3 className="vertical-timeline-element-title">Upload Funds to the Account</h3>
        <p>Deposit funds into your escrow account using your preferred payment method. Funds are securely held until needed.</p>
      </VerticalTimelineElement>

        {/* Step 3: Initiate a Transaction */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Step 3"
        >
        <h3 className="vertical-timeline-element-title">Initiate a Transaction</h3>
        <p>Initiate a transaction by providing the details of the transaction and the counterparty.</p>
        </VerticalTimelineElement>

        {/* Step 4: Confirm the Transaction Details */}


    </VerticalTimeline>
  );
};

export default EscrowTimeline;
