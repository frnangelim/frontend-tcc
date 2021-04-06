import React from "react";
import { CardBody, Row, Col, Form } from "reactstrap";
import { CustomCard } from "./../styles";
import { TypeBox } from "./styles";
import Fade from "react-reveal/Fade";

function TypeSelect(props) {
  return (
    <Fade right>
      <CustomCard>
        <CardBody>
          <Form>
            <Row>
              <Col sm={12}>Selecione o tipo do evento</Col>
              <div style={{ marginTop: 20, marginBottom: 20, width: "100%" }}>
                <TypeBox sm={8} onClick={() => props.onNext()}>
                  Presencial
                </TypeBox>
                <TypeBox sm={8} onClick={() => props.onNext()}>
                  Remoto
                </TypeBox>
              </div>
            </Row>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default TypeSelect;
