import React, { useState } from "react";
import { CardBody } from "reactstrap";
import { CustomCard, CustomButton } from "../styles";
import Fade from "react-reveal/Fade";
import Slots from "../../../components/Slots";

function EventSlots(props) {
  const [slots, setSlots] = useState(
    props.event.slots || [
      {
        name: "Voluntário",
        slots: 9999,
      },
    ]
  );

  return (
    <Fade right>
      <CustomCard>
        <h3>Vagas para voluntários</h3>
        <CardBody>
          <Slots slots={slots} onChange={(data) => setSlots([...data])} />
        </CardBody>

        <CustomButton color="primary" onClick={() => props.onNext(slots)}>
          Revisar dados
        </CustomButton>
      </CustomCard>
    </Fade>
  );
}

export default EventSlots;
