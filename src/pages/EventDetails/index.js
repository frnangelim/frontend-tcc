import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FiCalendar, FiMapPin, FiEdit3 } from "react-icons/fi";
import { Content, AboutContainer, OwnerImage } from "./styles";
import {
  Banner,
  BoldSpan,
  BottomHorizontalLine,
  EventTitle,
  EventTitleContainer,
  OrangeSpan,
  Share,
  TopHorizontalLine,
  LoadingContainer,
  Loading,
  FloatButton,
  PreviewContainer,
  PreviewText,
} from "../../styles/General.style";
import {
  EnrollmentButton,
  EnrollmentContainer,
} from "../EventEnrollment/styles";

import * as EventService from "../../services/EventService";

function EventDetails(props) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      let response;
      let event;
      if (props.preview) {
        response = localStorage.getItem("EVENT_PREVIEW");
        if (response) {
          event = JSON.parse(response);
        }
      } else {
        const slug = props.match && props.match.params.slug;
        response = await EventService.getEvent(slug);
        if (response) {
          event = response.event ? response.event : response;
        }
      }

      setEvent(event);
      setLoading(false);
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
              <Banner alt="Foto principal" src={event.image} />
              <Share
                href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                target="_blank"
              >
                Compartilhar
              </Share>
            </div>

            <EventTitleContainer>
              <EventTitle>{event.title}</EventTitle>
            </EventTitleContainer>
          </div>

          <Content>
            {event.date && (
              <div className={"date"}>
                <FiCalendar />
                <OrangeSpan>
                  {" "}
                  {new Date(event.date).toLocaleDateString()}
                </OrangeSpan>
              </div>
            )}

            {event.address ? (
              <div className={"location"}>
                <FiMapPin />
                <OrangeSpan> {event.address}</OrangeSpan>
              </div>
            ) : (
              <div className={"location"}>
                <FiMapPin />
                <OrangeSpan> Evento Remoto</OrangeSpan>
              </div>
            )}

            <div className={"description"}>
              <h2>Informações:</h2>
              <span>{event.description}</span>
            </div>

            <div className={"gaja"}>
              <TopHorizontalLine />
              <h3 style={{ textAlign: "center" }}>VAGAS PARA VOLUNTÁRIOS</h3>

              {event.slots &&
                event.slots.map((slot, index) => {
                  return (
                    <EnrollmentContainer key={index}>
                      <div className={"info"}>
                        <BoldSpan>{slot.name}</BoldSpan>
                        <br />
                        {slot.slots !== 9999 && (
                          <BoldSpan style={{ fontWeight: "bold" }}>
                            Vagas:{" "}
                            <span style={{ fontWeight: "normal" }}>
                              {slot.slots}
                            </span>
                          </BoldSpan>
                        )}
                      </div>
                      <div className={"button"}>
                        <EnrollmentButton
                          href={`/evento/${event.slug}/${slot.slug}`}
                        >
                          ENGAJAR
                        </EnrollmentButton>
                      </div>
                    </EnrollmentContainer>
                  );
                })}

              {!event.slots ||
                ((event.slots && event.slots.length) == 0 && (
                  <div style={{ textAlign: "center" }}>
                    <br />
                    <p>Sem vagas no momento</p>
                  </div>
                ))}

              <BottomHorizontalLine />
            </div>

            <br />

            <AboutContainer className={"about"}>
              <OwnerImage
                alt={"Logo"}
                src={event.owner && event.owner.profileImage} // ADD DEFAULT IMAGE
                className={"image"}
              />
              <div className={"text"}>
                <h2>Mais informações</h2>
                <span>
                  {`${event.owner ? event.owner.bio : ""}`.substring(0, 400) +
                    "..."}
                </span>
                <div style={{ marginTop: 10 }}>
                  <a href={`/${event.owner && event.owner.slug}`}>
                    Visitar página
                  </a>
                </div>
              </div>
            </AboutContainer>

            {!props.preview &&
              event.ownerId ===
                parseInt(localStorage.getItem("USER_ID") || "0") && (
                <FloatButton
                  onClick={() => history.push(`/evento/${event.slug}/detalhes`)}
                >
                  <FiEdit3 size={20} />
                </FloatButton>
              )}

            {props.preview && (
              <PreviewContainer>
                <PreviewText>PRÉ-VISUALIZAÇÃO</PreviewText>
              </PreviewContainer>
            )}
          </Content>
        </>
      )}
    </>
  );
}

export default EventDetails;
