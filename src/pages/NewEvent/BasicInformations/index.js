import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "../styles";

function BasicInformations(props) {
  return (
    <CustomCard>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Título*:</CustomLabel>
                <Input type="text" name="title" id="title" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="description">Descrição*:</CustomLabel>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  rows={5}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>

      <CustomButton outline color="primary" onClick={() => props.onNext()}>
        Próximo
      </CustomButton>
    </CustomCard>
  );
}

export default BasicInformations;
