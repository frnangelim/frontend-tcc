import React from "react";
import CustomCarousel from "../../../../components/CustomCarousel";

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
        <EventImage src={item.image} alt={"Foto do evento"} />
        <EventTitleContainer>
          <EventTitle>{item.title}</EventTitle>
        </EventTitleContainer>
        <BottomContainer>
          <SeeDetails>Ver detalhes</SeeDetails>
        </BottomContainer>
      </CarouselCard>
    </>
  );
}

function EventsEnrolled(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <CarouselTitleContainer>
        <CarouselTitle>
          Meus engajamentos ({props.events.length || 0})
        </CarouselTitle>
      </CarouselTitleContainer>
      <div style={{ maxWidth: 910, margin: "auto", marginTop: 20 }}>
        {props.events.length > 0 ? (
          <CustomCarousel items={props.events} component={carouselComponent} />
        ) : (
          <span>Você ainda não participou de nenhum evento.</span>
        )}
      </div>
    </div>
  );
}

export default EventsEnrolled;
