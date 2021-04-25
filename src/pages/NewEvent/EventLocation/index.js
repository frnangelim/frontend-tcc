import React, { useState } from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "../styles";
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
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <CustomButton outline color="primary" type="submit">
              Próximo
            </CustomButton>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default EventLocation;
