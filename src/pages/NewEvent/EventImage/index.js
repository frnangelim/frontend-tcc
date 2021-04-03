import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "./../styles";

function EventImage(props) {
  return (
    <CustomCard>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">URL da imagem de capa*:</CustomLabel>
                <Input type="text" name="image" id="image" />
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

export default EventImage;
