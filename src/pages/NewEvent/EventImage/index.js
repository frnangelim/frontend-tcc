import React, { useState } from "react";
import { CardBody, Row, Col, Form, FormGroup, Media } from "reactstrap";
import { CustomCard } from "./../styles";
import {
  CustomLabel,
  CustomOutlineButton,
} from "../../../styles/General.style";
import Fade from "react-reveal/Fade";
import ImageUploader from "react-images-upload";

function EventImage(props) {
  const [image, setImage] = useState(props.event.image || null);
  // const [errorMessage, setErrorMessage] = useState("");

  const onDrop = async (picture) => {
    if (picture && picture.length > 0) {
      setImage(picture[0]);
    }
  };

  const next = () => {
    // if (image) {
    props.onNext(image);
    // } else {
    //   setErrorMessage("Imagem obrigatória");
    // }
  };

  return (
    <Fade right>
      <CustomCard>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <CustomLabel for="title">Imagem de capa:</CustomLabel>
                  <br />
                  <ImageUploader
                    withIcon={true}
                    buttonText="Escolha uma imagem"
                    label={"Tamanho máximo: 5mb. Formato: jpg|jpeg|png"}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".png", ".jpeg"]}
                    maxFileSize={5242880}
                    singleImage={true}
                  />
                </FormGroup>
                {image && (
                  <Media
                    object
                    src={image && URL.createObjectURL(image)}
                    width="100%"
                    height="300"
                    alt={"Imagem de capa"}
                    style={{
                      objectFit: "contain",
                      border: "1px solid #ccc",
                    }}
                  />
                )}
                {/* {errorMessage && (
                  <ErrorSpan>
                    {errorMessage}
                    <br />
                  </ErrorSpan>
                )} */}
              </Col>
            </Row>
            <br />
            <CustomOutlineButton
              outline
              color="primary"
              onClick={() => next(image)}
            >
              Próximo
            </CustomOutlineButton>
          </Form>
        </CardBody>
      </CustomCard>
    </Fade>
  );
}

export default EventImage;
