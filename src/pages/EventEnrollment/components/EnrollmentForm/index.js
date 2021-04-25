import React, { useState } from "react";
import { Form } from "reactstrap";
import InputMask from "react-input-mask";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import {
  Content,
  Title,
  InnerContainer,
  TopHorizontalLine,
  BottomHorizontalLine,
  Input,
  InputContainer,
  ButtonContainer,
} from "./styles";

import {
  CustomButton,
  OrangeSpan,
  ErrorSpan,
} from "../../../../styles/General.style";

import * as EventService from "../../../../services/EventService";

function EnrollmentForm(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const isFormValid = () => {
    if (!form.phone || form.phone.includes("_")) {
      setErrorMessage("Telefone inválido");
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormValid()) {
        const response = await EventService.createEnrollment({
          eventId: props.event.id,
          slotId: props.slot.id,
          ...form,
        });
        if (response) {
          props.onSubmit();
        }
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
    <>
      <Content>
        <div className={"information"}>
          <Title>Inscrição como "{props.slot.name}"</Title>
          <div>
            {props.event.date && (
              <div>
                <FiCalendar />
                <OrangeSpan>
                  {" "}
                  {new Date(props.event.date).toLocaleDateString()}
                </OrangeSpan>
              </div>
            )}

            {props.event.address ? (
              <div style={{ marginTop: 10 }}>
                <FiMapPin />
                <OrangeSpan> {props.event.address}</OrangeSpan>
              </div>
            ) : (
              <div style={{ marginTop: 10 }}>
                <FiMapPin />
                <OrangeSpan> Evento Remoto</OrangeSpan>
              </div>
            )}
          </div>
        </div>

        <div className={"form"}>
          <TopHorizontalLine />

          <InnerContainer>
            <>
              <h4>Formulário</h4>

              <Form onSubmit={onSubmit}>
                <InputContainer>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome*"
                    value={form.name}
                    onChange={(event) => {
                      setForm({ ...form, firstName: event.target.value });
                    }}
                    required
                  />
                </InputContainer>

                <InputContainer>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Sobrenome*"
                    value={form.lastName}
                    onChange={(event) => {
                      setForm({ ...form, lastName: event.target.value });
                    }}
                    required
                  />
                </InputContainer>

                <InputContainer>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={(event) => {
                      setForm({ ...form, email: event.target.value });
                    }}
                    required
                  />
                </InputContainer>

                <InputContainer>
                  <InputMask
                    mask="(99) 99999-9999"
                    maskChar="_"
                    value={form.phone}
                    onChange={(event) => {
                      setForm({ ...form, phone: event.target.value });
                    }}
                    name="phone"
                    placeholder="Telefone*"
                    required
                  >
                    {(inputProps) => <Input {...inputProps} />}
                  </InputMask>
                </InputContainer>
                {errorMessage && (
                  <ErrorSpan>
                    {errorMessage}
                    <br />
                  </ErrorSpan>
                )}
                <ButtonContainer>
                  <CustomButton color="primary" type="submit">
                    Enviar
                  </CustomButton>
                </ButtonContainer>
              </Form>
            </>
          </InnerContainer>

          <BottomHorizontalLine />
        </div>
      </Content>
    </>
  );
}

export default EnrollmentForm;
