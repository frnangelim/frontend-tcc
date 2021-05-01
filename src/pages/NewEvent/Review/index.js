import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardBody, Row, Col, Form, FormGroup, Input, Media } from "reactstrap";
import { useToasts } from "react-toast-notifications";
import Fade from "react-reveal/Fade";
import { ErrorSpan } from "../../../styles/General.style";
import { CustomCard } from "../styles";
import {
  CustomLabel,
  CustomButton,
  CustomOutlineButton,
} from "../../../styles/General.style";

import * as EventService from "../../../services/EventService";

function Review(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { addToast } = useToasts();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await EventService.create(props.event);
      if (response) {
        addToast("Evento criado com sucesso!", {
          appearance: "success",
          autoDismiss: true,
        });
        history.push(`/evento/${response.slug}`);
      }
    } catch (error) {
      console.log("e", error);
      setErrorMessage(
        error && error.err
          ? error.err.message
          : "Ocorreu um erro, tente novamente."
      );
    }
  };

  const onPreview = () => {
    const previewData = { ...props.event };
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
    <Fade bottom>
      <CustomCard>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <Row>
              {props.event.image && (
                <Col sm="12">
                  <Media
                    object
                    src={
                      props.event.image &&
                      URL.createObjectURL(props.event.image)
                    }
                    width="100%"
                    height="200"
                    alt={"Imagem de capa"}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Col>
              )}
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Título:</CustomLabel>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    value={props.event.title}
                    disabled
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
                    value={props.event.description}
                    disabled
                  />
                </FormGroup>
              </Col>
              {props.event.type === "IN_PERSION" && (
                <Col sm="12">
                  <FormGroup>
                    <CustomLabel for="title">Endereço:</CustomLabel>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      value={props.event.address}
                      disabled
                    />
                  </FormGroup>
                </Col>
              )}
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Data:</CustomLabel>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    value={props.event.date}
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            {errorMessage && (
              <ErrorSpan>
                {errorMessage}
                <br />
              </ErrorSpan>
            )}
            <CustomOutlineButton
              outline
              color="primary"
              onClick={() => onPreview()}
            >
              Pré-visualizar
            </CustomOutlineButton>
            <br />
            <br />
            <CustomButton color="primary" type="submit">
              Finalizar
            </CustomButton>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default Review;
