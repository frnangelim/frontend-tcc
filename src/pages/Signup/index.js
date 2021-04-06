import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { CustomCard, CustomLabel, CustomButton } from "./styles";
import logo from "../../assets/icons/icongaja.png";

function Signup() {
  return (
    <CustomCard>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ width: 60, height: 60 }} />
      </div>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">
                  Nome da sua organização/Nome pessoal*:
                </CustomLabel>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={"Insira como você deseja ser reconhecido"}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Email*:</CustomLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={"Digite o seu email"}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Senha*:</CustomLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={"Digite a sua senha"}
                />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <CustomButton color="primary">Cadastrar</CustomButton>
        </Form>
      </CardBody>
    </CustomCard>
  );
}

export default Signup;
