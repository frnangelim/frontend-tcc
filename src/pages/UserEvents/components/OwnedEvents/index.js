import React from "react";
import CustomCarousel from "../../../../components/CustomCarousel";
import MainPhoto from "../../../../assets/images/hands.png";

import {
  CarouselCard,
  CarouselTitle,
  EventTitleContainer,
  EventTitle,
  SeeDetails,
  BottomContainer,
  EventImage,
  CarouselTitleContainer,
} from "./../../styles";

function carouselComponent(item) {
  return (
    <>
      <CarouselCard>
        <EventImage src={MainPhoto} alt={"Foto do evento"} />
        <EventTitleContainer>
          <EventTitle>Evento de adoção</EventTitle>
        </EventTitleContainer>
        <BottomContainer>
          <SeeDetails>Ver detalhes</SeeDetails>
        </BottomContainer>
      </CarouselCard>
    </>
  );
}

function OwnedEvents(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <CarouselTitleContainer>
        <CarouselTitle>Criados por mim (5)</CarouselTitle>
      </CarouselTitleContainer>
      <div style={{ maxWidth: 910, margin: "auto", marginTop: 20 }}>
        <CustomCarousel
          items={[{}, {}, {}, {}]}
          component={carouselComponent}
        />
      </div>
    </div>
  );
}

export default OwnedEvents;
