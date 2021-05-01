import React, { useState } from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard } from "../styles";
import {
  CustomLabel,
  CustomOutlineButton,
} from "../../../styles/General.style";
import Fade from "react-reveal/Fade";

function BasicInformations(props) {
  const [title, setTitle] = useState(props.event.title || "");
  const [description, setDescription] = useState(props.event.description || "");
  const [date, setDate] = useState(props.event.date || undefined);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onNext({ title, description, date });
  };

  return (
    <Fade right>
      <CustomCard>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Título*:</CustomLabel>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Data*:</CustomLabel>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    required
                    value={date}
                    min={new Date().toISOString().split("T")[0]}
                    max={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <CustomOutlineButton type="submit" outline color="primary">
              Próximo
            </CustomOutlineButton>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default BasicInformations;
