import React, { useState } from "react";
import OwnedEvents from "./components/OwnedEvents";
import EventsEnrolled from "./components/EventsEnrolled";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";

function UserEvents() {
  const [ownedEvents, setOwnedEvents] = useState([]);
  const [enrolledEvents, setEnrolledEvents] = useState([]);

  return (
    <Container>
      <OwnedEvents events={ownedEvents} />
      <br />
      <br />
      <EventsEnrolled events={enrolledEvents} />
    </Container>
  );
}

export default UserEvents;
