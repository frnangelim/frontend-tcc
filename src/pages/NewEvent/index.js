import React, { useEffect, useState } from "react";
import { BackArrowContainer } from "./styles";
import TypeSelect from "./TypeSelect";
import BasicInformations from "./BasicInformations";
import EventImage from "./EventImage";
import EventLocation from "./EventLocation";
import Review from "./Review";
import BackArrow from "../../assets/icons/back-arrow.png";
import EventSlots from "./EventSlots";

function NewEvent() {
  const [step, setStep] = useState(0);
  const [component, setComponent] = useState(<></>);
  const [event, setEvent] = useState({
    type: "",
    title: "",
    description: "",
    date: undefined,
    image: null,
    address: "",
  });

  useEffect(() => {
    switch (step) {
      case 0:
        setComponent(
          <TypeSelect
            onNext={(value) => {
              setEvent({ ...event, type: value });
              setStep(1);
            }}
          />
        );
        break;
      case 1:
        setComponent(
          <BasicInformations
            event={event}
            onNext={(values) => {
              setEvent({
                ...event,
                title: values.title,
                description: values.description,
                date: values.date,
              });
              setStep(2);
            }}
          />
        );
        break;
      case 2:
        setComponent(
          <EventImage
            event={event}
            onNext={(value) => {
              setEvent({ ...event, image: value });
              if (event.type === "IN_PERSON") setStep(3);
              else setStep(4);
            }}
          />
        );
        break;
      case 3:
        setComponent(
          <EventLocation
            event={event}
            onNext={(value) => {
              setEvent({ ...event, address: value });
              setStep(4);
            }}
          />
        );
        break;
      case 4:
        setComponent(
          <EventSlots
            event={event}
            onNext={(value) => {
              setEvent({ ...event, slots: value });
              setStep(5);
            }}
          />
        );
        break;
      case 5:
        setComponent(<Review event={event} />);
        break;
      default:
        setComponent(<TypeSelect onNext={() => setStep(1)} />);
        break;
    }
  }, [step, event]);

  const onBack = () => {
    if (step === 4 && event.type === "REMOTE") {
      setStep(2);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step !== 0 && (
        <BackArrowContainer onClick={() => onBack()}>
          <img src={BackArrow} style={{ width: 50, height: 50 }} alt="Voltar" />
        </BackArrowContainer>
      )}

      <div style={{ marginTop: 150 }}>{component}</div>
    </>
  );
}

export default NewEvent;
