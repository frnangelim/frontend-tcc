import React, { useEffect, useState } from "react";
import { BackArrowContainer } from "./styles";
import TypeSelect from "./TypeSelect";
import BasicInformations from "./BasicInformations";
import EventImage from "./EventImage";
import EventLocation from "./EventLocation";
import Review from "./Review";
import BackArrow from "../../assets/icons/back-arrow.png";

function NewEvent() {
  const [step, setStep] = useState(0);
  const [component, setComponent] = useState(<></>);

  useEffect(() => {
    switch (step) {
      case 0:
        setComponent(<TypeSelect onNext={() => setStep(1)} />);
        break;
      case 1:
        setComponent(<BasicInformations onNext={() => setStep(2)} />);
        break;
      case 2:
        setComponent(<EventImage onNext={() => setStep(3)} />);
        break;
      case 3:
        setComponent(<EventLocation onNext={() => setStep(4)} />);
        break;
      case 4:
        setComponent(<Review />);
        break;
      default:
        setComponent(<TypeSelect onNext={() => setStep(1)} />);
        break;
    }
  }, [step]);

  return (
    <>
      {step !== 0 && (
        <BackArrowContainer onClick={() => setStep(step - 1)}>
          <img src={BackArrow} style={{ width: 50, height: 50 }} alt="Voltar" />
        </BackArrowContainer>
      )}

      {component}
    </>
  );
}

export default NewEvent;
