import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OwnedEvents from "./components/OwnedEvents";
import EventsEnrolled from "./components/EventsEnrolled";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./styles";
import {
  LoadingContainer,
  Loading,
  FloatButton,
} from "../../styles/General.style";

import * as EventService from "../../services/EventService";

function UserEvents() {
  const [ownedEvents, setOwnedEvents] = useState([]);
  const [enrolledEvents, setEnrolledEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      let response = await EventService.getUserEvents();
      if (response) {
        setOwnedEvents(response.ownedEvents);
        setEnrolledEvents(response.userEnrollments);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading color={"#DC3736"} />
        </LoadingContainer>
      ) : (
        <Container>
          <OwnedEvents events={ownedEvents} />
          <br />
          <br />
          <EventsEnrolled events={enrolledEvents} />

          <FloatButton onClick={() => history.push("/evento/novo")}>
            +
          </FloatButton>
        </Container>
      )}
    </>
  );
}

export default UserEvents;
