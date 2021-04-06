import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "../styles";
import Fade from "react-reveal/Fade";

function EventLocation(props) {
  return (
    <Fade right>
      <CustomCard>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Endereço*:</CustomLabel>
                  <Input type="text" name="address" id="address" />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Data*:</CustomLabel>
                  <Input type="date" name="date" id="date" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>

        <CustomButton outline color="primary" onClick={() => props.onNext()}>
          Próximo
        </CustomButton>
      </CustomCard>
    </Fade>
  );
}

export default EventLocation;
