import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "../styles";

function Review() {
  return (
    <CustomCard>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Título:</CustomLabel>
                <Input type="text" name="title" id="title" disabled />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="description">Descrição:</CustomLabel>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  rows={5}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Endereço:</CustomLabel>
                <Input type="text" name="address" id="address" disabled />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Data:</CustomLabel>
                <Input type="date" name="date" id="date" disabled />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">URL da imagem de capa:</CustomLabel>
                <Input type="text" name="image" id="image" disabled />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>

      <CustomButton outline color="primary">
        Pré-visualizar
      </CustomButton>
      <br />
      <CustomButton color="primary">Finalizar</CustomButton>
    </CustomCard>
  );
}

export default Review;
