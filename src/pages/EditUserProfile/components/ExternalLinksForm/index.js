import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Media, Input } from "reactstrap";
import InputMask from "react-input-mask";
import { CustomLabel, CustomButton } from "./../../styles";

function ExternalLinksForm(props) {
  const [user, setUser] = useState(props.user || {});

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Form style={{ marginTop: 20 }} onSubmit={(e) => props.onSubmit(e, user)}>
        <Row>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Instagram:</CustomLabel>
              <Input
                type="text"
                name="instagramUrl"
                id="instagramUrl"
                placeholder={"Insira aqui a URL do seu Instagram"}
                value={user.instagramUrl}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Facebook:</CustomLabel>
              <Input
                type="text"
                name="facebookUrl"
                id="facebookUrl"
                placeholder={"Insira aqui a URL do seu Facebook"}
                value={user.facebookUrl}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Website:</CustomLabel>
              <Input
                type="text"
                name="websiteUrl"
                id="websiteUrl"
                placeholder={"Insira aqui a URL do seu site"}
                value={user.websiteUrl}
                onChange={onInputChange}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Whatsapp:</CustomLabel>
              <InputMask
                mask="(99) 99999-9999"
                maskChar="_"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder={"Insira aqui o seu número do WhatsApp"}
                value={user.whatsappNumber}
                onChange={onInputChange}
              >
                {(inputProps) => <Input {...inputProps} />}
              </InputMask>
            </FormGroup>
          </Col>
        </Row>
        <br />
        <CustomButton color="primary" type="submit">
          Atualizar perfil
        </CustomButton>
      </Form>
    </>
  );
}

export default ExternalLinksForm;
