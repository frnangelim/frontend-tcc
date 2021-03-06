import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
import {
  CustomLabel,
  CustomButton,
  CustomOutlineButton,
} from "./../../../../styles/General.style";

function BasicInformationsForm(props) {
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
              <CustomLabel for="title">Email*:</CustomLabel>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder={"Digite o seu email"}
                disabled
                value={user.email}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">
                Nome da sua organização/Nome pessoal*:
              </CustomLabel>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder={"Insira como você deseja ser reconhecido"}
                value={user.fullName}
                onChange={onInputChange}
                required
                maxLength={50}
              />
            </FormGroup>
          </Col>

          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Endereço:</CustomLabel>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder={"Insira o seu endereço"}
                value={user.address}
                onChange={onInputChange}
                maxLength={50}
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Sobre você*:</CustomLabel>
              <Input
                type="textarea"
                name="bio"
                id="bio"
                placeholder={
                  "As informações colocadas aqui irão aparecer no seu perfil para que os usuários possam conhecer um pouco sobre você"
                }
                value={user.bio}
                rows={5}
                onChange={onInputChange}
                required
                maxLength={1000}
              />
            </FormGroup>
          </Col>
        </Row>
        <br />
        <CustomOutlineButton
          outline
          color="primary"
          type="button"
          onClick={() => props.onPreview(user)}
        >
          Pré-visualizar
        </CustomOutlineButton>
        <br />
        <br />
        <CustomButton color="primary" type="submit">
          Atualizar perfil
        </CustomButton>
      </Form>
    </>
  );
}

export default BasicInformationsForm;
