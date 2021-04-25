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
    <CarouselCard key={item.slug}>
      <EventImage src={item.image} alt={"Foto do evento"} />
      <EventTitleContainer>
        <EventTitle>{item.title}</EventTitle>
      </EventTitleContainer>
      <BottomContainer
        onClick={() => {
          window.location.href = `/evento/${item.slug}/detalhes`;
        }}
      >
        <SeeDetails>Ver detalhes</SeeDetails>
      </BottomContainer>
    </CarouselCard>
  );
}

function OwnedEvents(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <CarouselTitleContainer>
        <CarouselTitle>
          Criados por mim ({props.events.length || 0})
        </CarouselTitle>
      </CarouselTitleContainer>
      <div style={{ maxWidth: 910, margin: "auto", marginTop: 20 }}>
        {props.events.length > 0 ? (
          <CustomCarousel items={props.events} component={carouselComponent} />
        ) : (
          <span>Você ainda não criou nenhum evento.</span>
        )}
      </div>
    </div>
  );
}

export default OwnedEvents;
