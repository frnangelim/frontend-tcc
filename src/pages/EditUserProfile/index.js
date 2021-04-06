import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { CustomCard, CustomLabel, CustomButton, CustomNavLink } from "./styles";
import logo from "../../assets/icons/icongaja.png";
import classnames from "classnames";

function EditUserProfile() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <CustomCard>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ width: 60, height: 60 }} />
      </div>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Pessoal
            </CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Imagens
            </CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Social
            </CustomNavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Form style={{ marginTop: 20 }}>
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
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">
                      Nome da sua organização/Nome pessoal:
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
                    <CustomLabel for="title">Endereço:</CustomLabel>
                    <Input
                      type="text"
                      name="cover"
                      id="cover"
                      placeholder={"Insira o seu endereço"}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Sobre você*:</CustomLabel>
                    <Input
                      type="textarea"
                      name="about"
                      id="about"
                      placeholder={
                        "As informações colocadas aqui irão aparecer no seu perfil para que os usuários possam conhecer um pouco do seu trabalho"
                      }
                      rows={5}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <CustomButton color="primary">Atualizar perfil</CustomButton>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form style={{ marginTop: 20 }}>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Foto do perfil:</CustomLabel>
                    <Input
                      type="text"
                      name="image"
                      id="image"
                      placeholder={"Insira aqui a URL da imagem do perfil"}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Foto de capa:</CustomLabel>
                    <Input
                      type="text"
                      name="cover"
                      id="cover"
                      placeholder={"Insira aqui a URL da imagem de capa"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <CustomButton color="primary">Atualizar perfil</CustomButton>
            </Form>
          </TabPane>
          <TabPane tabId="3">
            <Form style={{ marginTop: 20 }}>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Instagram:</CustomLabel>
                    <Input
                      type="text"
                      name="instagramUrl"
                      id="instagramUrl"
                      placeholder={"Insira aqui a URL do seu Instagram"}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Facebook:</CustomLabel>
                    <Input
                      type="text"
                      name="facebookUrl"
                      id="instagramUrl"
                      placeholder={"Insira aqui a URL do seu Facebook"}
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
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Whatsapp:</CustomLabel>
                    <Input
                      type="text"
                      name="whatsappNumber"
                      id="whatsappNumber"
                      placeholder={"Insira aqui o seu número do WhatsApp"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <CustomButton color="primary">Atualizar perfil</CustomButton>
            </Form>
          </TabPane>
        </TabContent>
      </CardBody>
    </CustomCard>
  );
}

export default EditUserProfile;
