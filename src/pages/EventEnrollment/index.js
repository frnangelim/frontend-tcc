import React, { useState } from "react";
import {
  EventTitleContainer,
  EventTitle,
  Banner,
  Share,
} from "./../../styles/General.style";
import MainPhoto from "../../assets/images/hands.png";
import EnrollmentForm from "./components/EnrollmentForm";
import FinishedEnrollment from "./components/FinishedEnrollment";

function EventEnrollment() {
  const [finished, setFinished] = useState(false);

  return (
    <>
      <div>
        <div>
          <Banner alt="Foto principal" src={MainPhoto} />
          <Share href={"/evento/slug"}>Compartilhar</Share>
        </div>

        <EventTitleContainer>
          <EventTitle>Evento de adoção</EventTitle>
        </EventTitleContainer>
      </div>
      {finished ? (
        <FinishedEnrollment />
      ) : (
        <EnrollmentForm onSubmit={() => setFinished(true)} />
      )}
      <br />
    </>
  );
}

export default EventEnrollment;
