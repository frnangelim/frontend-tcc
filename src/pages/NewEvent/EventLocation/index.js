import React, { useState } from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard } from "../styles";
import {
  CustomLabel,
  CustomOutlineButton,
} from "../../../styles/General.style";
import Fade from "react-reveal/Fade";

function EventLocation(props) {
  const [address, setAddress] = useState(props.event.address || "");

  return (
    <Fade right>
      <CustomCard>
        <CardBody>
          <Form onSubmit={() => props.onNext(address)}>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Endereço*:</CustomLabel>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    required
                    maxLength={50}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <CustomOutlineButton outline color="primary" type="submit">
              Próximo
            </CustomOutlineButton>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default EventLocation;
