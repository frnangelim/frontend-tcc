import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Media } from "reactstrap";
import { CustomLabel, CustomButton } from "./../../styles";
import ImageUploader from "react-images-upload";

function ImagesForm(props) {
  const [user, setUser] = useState(props.user || {});

  const getImageData = (image) => {
    if (image && image instanceof Blob) {
      return URL.createObjectURL(image);
    } else if (image) {
      return image;
    }
  };

  const onDrop = async (picture, imageKey) => {
    if (picture && picture.length > 0) {
      setUser({ ...user, [imageKey]: picture[0] });
    }
  };

  return (
    <>
      <Form style={{ marginTop: 20 }} onSubmit={(e) => props.onSubmit(e, user)}>
        <Row>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Foto do perfil:</CustomLabel>
              {user.profileImage && (
                <div
                  style={{ textAlign: "right" }}
                  onClick={() => setUser({ ...user, profileImage: null })}
                >
                  <span style={{ cursor: "pointer", color: "#007bff" }}>
                    Remover foto
                  </span>
                </div>
              )}

              <br />
              {!user.profileImage ? (
                <ImageUploader
                  withIcon={true}
                  buttonText="Escolha uma imagem"
                  label={"Tamanho máximo: 5mb. Formato: jpg|jpeg|png"}
                  onChange={(e) => onDrop(e, "profileImage")}
                  imgExtension={[".jpg", ".png", ".jpeg"]}
                  maxFileSize={5242880}
                  singleImage={true}
                />
              ) : (
                <Media
                  object
                  src={getImageData(user.profileImage)}
                  width="100%"
                  height="300"
                  alt={"Foto do perfil"}
                  style={{
                    objectFit: "contain",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <CustomLabel for="title">Imagem da capa:</CustomLabel>
              {user.coverImage && (
                <div
                  style={{ textAlign: "right" }}
                  onClick={() => setUser({ ...user, coverImage: null })}
                >
                  <span style={{ cursor: "pointer", color: "#007bff" }}>
                    Remover capa
                  </span>
                </div>
              )}
              <br />
              {!user.coverImage ? (
                <ImageUploader
                  withIcon={true}
                  buttonText="Escolha uma imagem"
                  label={"Tamanho máximo: 5mb. Formato: jpg|jpeg|png"}
                  onChange={(e) => onDrop(e, "coverImage")}
                  imgExtension={[".jpg", ".png", ".jpeg"]}
                  maxFileSize={5242880}
                  singleImage={true}
                />
              ) : (
                <Media
                  object
                  src={getImageData(user.coverImage)}
                  width="100%"
                  height="300"
                  alt={"Imagem da capa"}
                  style={{
                    objectFit: "contain",
                    border: "1px solid #ccc",
                  }}
                />
              )}
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

export default ImagesForm;
