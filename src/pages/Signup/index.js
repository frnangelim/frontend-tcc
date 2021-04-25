import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { CardBody, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { ErrorSpan } from "../../styles/General.style";
import { CustomCard, CustomLabel, CustomButton } from "./styles";
import logo from "../../assets/icons/icongaja.png";

import * as UserService from "../../services/UserService";

function Signup(props) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { addToast } = useToasts();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await UserService.signup(newUser);
      if (response) {
        addToast("Cadastro realizado com sucesso!", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push("/entrar");
      }
    } catch (error) {
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
                <CustomLabel for="name">
                  Nome da sua organização/Nome pessoal*:
                </CustomLabel>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={newUser.fullName}
                  onChange={onChangeInput}
                  placeholder={"Insira como você deseja ser reconhecido"}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="email">Email*:</CustomLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={newUser.email}
                  onChange={onChangeInput}
                  placeholder={"Digite o seu email"}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <CustomLabel for="password">Senha*:</CustomLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={newUser.password}
                  onChange={onChangeInput}
                  placeholder={"Digite a sua senha"}
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
          <CustomButton color="primary">Cadastrar</CustomButton>
        </Form>
      </CardBody>
    </CustomCard>
  );
}

export default Signup;
