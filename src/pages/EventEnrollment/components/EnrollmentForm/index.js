import React, { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import {
  Content,
  Title,
  InnerContainer,
  TopHorizontalLine,
  BottomHorizontalLine,
  Input,
  Button,
  InputContainer,
  ButtonContainer,
} from "./styles";

import { OrangeSpan } from "../../../../styles/General.style";

function EnrollmentForm(props) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <Content>
      <div className={"information"}>
        <Title>Inscrição como "Voluntário 1"</Title>
        <div>
          <div>
            <FiCalendar />
            <OrangeSpan>03/03/2021</OrangeSpan>
          </div>

          <div style={{ marginTop: 10 }}>
            <FiMapPin />
            <OrangeSpan>
              Av. Dr. Elpídio de Almeida, 215 - Catolé, Campina Grande - PB,
              58410-215
            </OrangeSpan>
          </div>
        </div>
      </div>

      <div className={"form"}>
        <TopHorizontalLine />

        <InnerContainer>
          <>
            <h4>Formulário</h4>

            <div>
              <InputContainer>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome*"
                  value={form.name}
                  onChange={(event) => {
                    setForm({ ...form, name: event.target.value });
                  }}
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
                />
              </InputContainer>

              <InputContainer>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(event) => {
                    setForm({ ...form, email: event.target.value });
                  }}
                />
              </InputContainer>

              <InputContainer>
                <Input
                  type="text"
                  name="phone"
                  placeholder="Telefone*"
                  value={form.phone}
                  onChange={(event) => {
                    setForm({ ...form, phone: event.target.value });
                  }}
                />
              </InputContainer>
            </div>

            <ButtonContainer>
              <Button onClick={() => props.onSubmit()}>Enviar</Button>
            </ButtonContainer>
          </>
        </InnerContainer>

        <BottomHorizontalLine />
      </div>
    </Content>
  );
}

export default EnrollmentForm;
