import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import ImageUploader from "react-images-upload";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
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
  Media,
} from "reactstrap";
import Slots from "../../components/Slots";
import VolunteersList from "./components/VolunteersList";

import { CustomCard, CustomLabel, CustomButton, CustomNavLink } from "./styles";
import { ErrorSpan } from "../../styles/General.style";

import * as EventService from "../../services/EventService";

function UpdateEvent(props) {
  const [event, setEvent] = useState({});
  const [slots, setSlots] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const slug = props.match && props.match.params.slug;
      const response = await EventService.getEvent(slug);
      setEvent(response.event);
      setSlots(response.event.slots);
      setEnrollments(response.enrollments);
      setLoading(false);
    }
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EventService.update({ ...event, slots });
      if (response) {
        addToast("Evento atualizado com sucesso!", {
          appearance: "success",
          autoDismiss: true,
        });
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(
        error && error.err
          ? error.err.message
          : "Ocorreu um erro, tente novamente."
      );
    }
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const onDrop = async (picture) => {
    if (picture && picture.length > 0) {
      setEvent({ ...event, image: picture[0] });
    }
  };

  const getImageData = () => {
    if (event.image && event.image instanceof Blob) {
      return URL.createObjectURL(event.image);
    } else if (event.image) {
      return event.image;
    }
  };

  const onPreview = () => {
    const previewData = { ...event };
    if (previewData.image && previewData.image instanceof Blob) {
      var reader = new FileReader();
      reader.readAsDataURL(previewData.image);
      reader.onloadend = function () {
        var base64data = reader.result;
        previewData.image = base64data;
        localStorage.setItem("EVENT_PREVIEW", JSON.stringify(previewData));
        window.open("/evento/preview", "_blank").focus();
      };
    } else {
      localStorage.setItem("EVENT_PREVIEW", JSON.stringify(previewData));
      window.open("/evento/preview", "_blank").focus();
    }
  };

  return (
    <CustomCard>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Editar informações
            </CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Vagas
            </CustomNavLink>
          </NavItem>
          <NavItem>
            <CustomNavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Voluntários
            </CustomNavLink>
          </NavItem>
        </Nav>
        {!loading && (
          <TabContent activeTab={activeTab}>
            <TabPane tabId="3">
              <Form style={{ marginTop: 40 }}>
                <VolunteersList enrollments={enrollments} />
              </Form>
            </TabPane>
            <TabPane tabId="2">
              <Form style={{ marginTop: 40 }} onSubmit={onSubmit}>
                <Slots
                  slots={slots}
                  onChange={(slots) => setSlots([...slots])}
                />
                <br />
                <CustomButton color="primary" type="submit">
                  Salvar
                </CustomButton>
              </Form>
            </TabPane>
            <TabPane tabId="1">
              <Form style={{ marginTop: 20 }} onSubmit={onSubmit}>
                <Row>
                  <Col sm="12">
                    <FormGroup>
                      <CustomLabel for="title">Título:</CustomLabel>
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        value={event.title}
                        onChange={onInputChange}
                        required
                      />
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
                        value={event.description}
                        onChange={onInputChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup>
                      <CustomLabel for="address">Endereço:</CustomLabel>
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        value={event.address}
                        onChange={onInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <FormGroup>
                      <CustomLabel for="date">Data:</CustomLabel>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        value={event.date && event.date.split("T")[0]}
                        onChange={onInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <CustomLabel for="title">Imagem de capa*:</CustomLabel>
                    {event.image && (
                      <div
                        style={{ textAlign: "right" }}
                        onClick={() => setEvent({ ...event, image: null })}
                      >
                        <span style={{ cursor: "pointer", color: "#007bff" }}>
                          Remover imagem
                        </span>
                      </div>
                    )}

                    <br />

                    {!event.image ? (
                      <ImageUploader
                        withIcon={true}
                        buttonText="Escolha uma imagem"
                        label={"Tamanho máximo: 5mb. Formato: jpg|jpeg|png"}
                        onChange={onDrop}
                        imgExtension={[".jpg", ".png", ".jpeg"]}
                        maxFileSize={5242880}
                        singleImage={true}
                      />
                    ) : (
                      <Media
                        object
                        src={getImageData()}
                        width="100%"
                        height="300"
                        alt={"Imagem de capa"}
                        style={{
                          objectFit: "contain",
                          border: "1px solid #ccc",
                        }}
                      />
                    )}
                  </Col>
                </Row>
                {errorMessage && (
                  <ErrorSpan>
                    {errorMessage}
                    <br />
                  </ErrorSpan>
                )}
                <br />
                <CustomButton
                  outline
                  color="primary"
                  type="button"
                  onClick={() => onPreview()}
                >
                  Pré-visualizar
                </CustomButton>
                <br />
                <br />
                <CustomButton color="primary" type="submit">
                  Salvar
                </CustomButton>
              </Form>
            </TabPane>
          </TabContent>
        )}
      </CardBody>
    </CustomCard>
  );
}

export default UpdateEvent;
