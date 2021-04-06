import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "./styles";

function UpdateEvent() {
  return (
    <CustomCard>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Título:</CustomLabel>
                <Input type="text" name="title" id="title" />
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
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Endereço:</CustomLabel>
                <Input type="text" name="address" id="address" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Data:</CustomLabel>
                <Input type="date" name="date" id="date" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">URL da imagem de capa:</CustomLabel>
                <Input type="text" name="image" id="image" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>

      <CustomButton outline color="primary">
        Pré-visualizar
      </CustomButton>
      <br />
      <CustomButton color="primary">Atualizar</CustomButton>
    </CustomCard>
  );
}

export default UpdateEvent;
