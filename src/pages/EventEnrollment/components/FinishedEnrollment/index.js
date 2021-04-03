import React from "react";
import Baloon from "../../../../assets/icons/baloon.png";
import {
  Content,
  TopHorizontalLine,
  BottomHorizontalLine,
  TopMessage,
  ConfirmationContainer,
  GreenContainer,
  PinkContainer,
  OrangeContainer,
  HintContainer,
} from "./styles";

import { BoldSpan } from "../../../../styles/General.style";

function FinishedEnrollment() {
  return (
    <Content>
      <div className={"top"}>
        <TopMessage>Obrigado por engajar!</TopMessage>
      </div>

      <div className={"confirmation"}>
        <TopHorizontalLine />

        <ConfirmationContainer>
          <div>
            <span style={{ fontWeight: "bold" }}>Inscrição realizada!</span>
          </div>
          <div style={{ marginTop: 30 }}>
            <span>
              Fique atento ao seu e-mail e celular, você receberá uma mensagem
              com a confirmação da inscrição e os demais detalhes necessários.
            </span>
          </div>
        </ConfirmationContainer>

        <BottomHorizontalLine />
      </div>

      <div className={"hints"}>
        <div>
          <img src={Baloon} alt="Teste" />
        </div>
        <div>
          <BoldSpan>Dicas do GAJA</BoldSpan>
        </div>

        <GreenContainer>
          <div>
            <BoldSpan>Não vai conseguir ir?</BoldSpan>
          </div>
          <HintContainer>
            <span>
              Avisa a instituição assim que possível por telefone, e-mail ou
              sinal de fumaça.
            </span>
          </HintContainer>
        </GreenContainer>

        <PinkContainer>
          <div>
            <BoldSpan>Vá com o coração aberto</BoldSpan>
          </div>
          <HintContainer>
            <span>
              Ser voluntário é muito mais que doar tempo e dedicação é além de
              tudo receber amor.
            </span>
          </HintContainer>
        </PinkContainer>

        <OrangeContainer>
          <div>
            <BoldSpan>Chegue cedo</BoldSpan>
          </div>
          <HintContainer>
            <span>
              Chegar cedo é importante para obter as informações necessárias e
              se familiarizar com a equipe.
            </span>
          </HintContainer>
        </OrangeContainer>
      </div>
    </Content>
  );
}

export default FinishedEnrollment;
