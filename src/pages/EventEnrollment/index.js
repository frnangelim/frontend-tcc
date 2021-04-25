import React, { useEffect, useState } from "react";
import {
  EventTitleContainer,
  EventTitle,
  Banner,
  Share,
  LoadingContainer,
  Loading,
} from "./../../styles/General.style";
import EnrollmentForm from "./components/EnrollmentForm";
import FinishedEnrollment from "./components/FinishedEnrollment";

import * as EventService from "../../services/EventService";

function EventEnrollment(props) {
  const [event, setEvent] = useState({});
  const [slot, setSlot] = useState({});
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const eventSlug = props.match && props.match.params.slug;
      const slotSlug = props.match && props.match.params.slotSlug;
      const response = await EventService.getSlot(eventSlug, slotSlug);
      if (response) {
        setEvent(response.event);
        setSlot(response.slot);
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
        <>
          <div>
            <div>
              <Banner alt="Foto principal" src={event && event.image} />
              <Share href={"/evento/slug"}>Compartilhar</Share>
            </div>

            <EventTitleContainer>
              <EventTitle>Evento de adoção</EventTitle>
            </EventTitleContainer>
          </div>
          {finished ? (
            <FinishedEnrollment />
          ) : (
            <EnrollmentForm
              {...props}
              event={event}
              slot={slot}
              onSubmit={() => setFinished(true)}
            />
          )}
        </>
      )}
      <br />
    </>
  );
}

export default EventEnrollment;
