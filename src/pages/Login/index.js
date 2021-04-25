import React, { useState } from "react";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import {
  CustomCard,
  CustomLabel,
  CustomButton,
  BottomContainer,
} from "./styles";
import { OrangeSpan, ErrorSpan } from "../../styles/General.style";
import logo from "../../assets/icons/icongaja.png";

import * as AuthService from "../../services/AuthService";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await AuthService.login(user);
      if (response) {
        localStorage.setItem("USER_JWT", response.jwt);
        localStorage.setItem("USER_ID", response.user.id);
        props.loginEvent();
        history.push("/meus-eventos");
      }
    } catch (error) {
      console.log("ERROR", error);
      setErrorMessage(
        error && error.err
          ? error.err.message
          : "Ocorreu um erro, tente novamente."
      );
    }
  };

  return (
    <CustomCard>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ width: 60, height: 60 }} />
      </div>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Email:</CustomLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChangeInput}
                  value={user.email}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="title">Senha:</CustomLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChangeInput}
                  value={user.password}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          {errorMessage && (
            <ErrorSpan>
              {errorMessage}
              <br />
            </ErrorSpan>
          )}
          <br />
          <CustomButton color="primary">Entrar</CustomButton>

          <BottomContainer
            onClick={() => {
              history.push("/cadastrar");
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
