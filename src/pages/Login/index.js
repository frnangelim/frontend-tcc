import React from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import {
  CustomCard,
  CustomLabel,
  CustomButton,
  BottomContainer,
} from "./styles";
import logo from "../../assets/icons/icongaja.png";
import { OrangeSpan } from "../../styles/General.style";

function Login() {
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
                <CustomLabel for="title">Email:</CustomLabel>
                <Input type="email" name="email" id="email" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Senha:</CustomLabel>
                <Input type="password" name="password" id="password" />
              </FormGroup>
            </Col>
          </Row>
          <br />
          <CustomButton color="primary">Entrar</CustomButton>

          <BottomContainer
            onClick={() => {
              window.location.href = "/cadastrar";
            }}
          >
            <OrangeSpan>
              Ainda não possui uma conta? Registre-se aqui
            </OrangeSpan>
          </BottomContainer>
        </Form>
      </CardBody>
    </CustomCard>
  );
}

export default Login;
