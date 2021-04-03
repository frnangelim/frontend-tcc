import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Logo from "../../assets/images/a4.jpeg";
import { Content, AboutContainer } from "./styles";
import {
  Banner,
  BoldSpan,
  BottomHorizontalLine,
  EventTitle,
  EventTitleContainer,
  OrangeSpan,
  Share,
  TopHorizontalLine,
} from "../../styles/General.style";
import MainPhoto from "../../assets/images/hands.png";
import {
  EnrollmentButton,
  EnrollmentContainer,
} from "../EventEnrollment/styles";

function EventDetails() {
  return (
    <>
      <div>
        <div>
          <Banner alt="Foto principal" src={MainPhoto} />
          <Share href={"/evento/slug"}>Compartilhar</Share>
        </div>

        <EventTitleContainer>
          <EventTitle>Evento de adoção</EventTitle>
        </EventTitleContainer>
      </div>

      <Content>
        <div className={"date"}>
          <FiCalendar />
          <OrangeSpan>03/03/2021</OrangeSpan>
        </div>
        <div className={"location"}>
          <FiMapPin />
          <OrangeSpan>
            Av. Dr. Elpídio de Almeida, 215 - Catolé, Campina Grande - PB,
            58410-215
          </OrangeSpan>
        </div>
        <div className={"description"}>
          <h2>Informações:</h2>
          <span>
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis. Sapien in monti palavris
            qui num significa nadis i pareci latim. Mé faiz elementum girarzis,
            nisi eros vermeio. Paisis, filhis, espiritis santis. Praesent vel
            viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
            Atirei o pau no gatis, per gatis num morreus. Si u mundo tá muito
            paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam
            molestie leo, vitae iaculis nisl. Praesent malesuada urna nisi, quis
            volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss
            deixa as pessoas mais interessantis. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Delegadis gente finis, bibendum
            egestas augue arcu ut est.
          </span>
        </div>

        <div className={"gaja"}>
          <TopHorizontalLine />
          <h3 style={{ textAlign: "center" }}>ENGAJANDO PRESENCIALMENTE</h3>

          <EnrollmentContainer>
            <div>
              <BoldSpan>Voluntário I</BoldSpan>
              <br />
              <BoldSpan>
                Vagas: <span style={{ fontWeight: "normal" }}>8/10</span>
              </BoldSpan>
            </div>
            <div>
              <EnrollmentButton href={"/evento/slug/slot"}>
                ENGAJAR
              </EnrollmentButton>
            </div>
          </EnrollmentContainer>
          <EnrollmentContainer>
            <div>
              <BoldSpan>Voluntário II</BoldSpan>
              <br />
              <BoldSpan style={{ fontWeight: "bold" }}>
                Vagas: <span style={{ fontWeight: "normal" }}>3/10</span>
              </BoldSpan>
            </div>
            <div>
              <EnrollmentButton href={"/evento/slug/slot"}>
                ENGAJAR
              </EnrollmentButton>
            </div>
          </EnrollmentContainer>

          <BottomHorizontalLine />
        </div>

        <br />

        <AboutContainer className={"about"}>
          <img alt={"Logo"} src={Logo} className={"image"} />
          <div className={"text"}>
            <h2>Sobre nós</h2>
            <span>
              {`A A4 - Associação dos Amigos dos Animais Abandonados há 17 anos vem cumprindo seu propósito junto a sociedade, atuando no cuidado com os animais acolhidos em nosso abrigo e na luta por políticas públicas em prol da causa animal.
                            Nossas ações na cidade de Campina Grande - PB, tem o intuito de ajudar os animais acolhidos em nosso abrigo, atualmente em número superior a 100 entre cachorros e gatos, e nesse período de Pandemia estendendo nossas ações aos animais abandonados nas ruas de nossa cidade.
                            A A4 - Associação dos Amigos dos Animais Abandonados há 17 anos vem cumprindo seu propósito junto a sociedade, atuando no cuidado com os animais acolhidos em nosso abrigo e na luta por políticas públicas em prol da causa animal.
                            Nossas ações na cidade de Campina Grande - PB, tem o intuito de ajudar os animais acolhidos em nosso abrigo, atualmente em número superior a 100 entre cachorros e gatos, e nesse período de Pandemia estendendo nossas ações aos animais abandonados nas ruas de nossa cidade.A A4 - Associação dos Amigos dos Animais Abandonados há 17 anos vem cumprindo seu propósito junto a sociedade, atuando no cuidado com os animais acolhidos em nosso abrigo e na luta por políticas públicas em prol da causa animal.
                            Nossas ações na cidade de Campina Grande - PB, tem o intuito de ajudar os animais acolhidos em nosso abrigo, atualmente em número superior a 100 entre cachorros e gatos, e nesse período de Pandemia estendendo nossas ações aos animais abandonados nas ruas de nossa cidade.A A4 - Associação dos Amigos dos Animais Abandonados há 17 anos vem cumprindo seu propósito junto a sociedade, atuando no cuidado com os animais acolhidos em nosso abrigo e na luta por políticas públicas em prol da causa animal.
                            Nossas ações na cidade de Campina Grande - PB, tem o intuito de ajudar os animais acolhidos em nosso abrigo, atualmente em número superior a 100 entre cachorros e gatos, e nesse período de Pandemia estendendo nossas ações aos animais abandonados nas ruas de nossa cidade.A A4 - Associação dos Amigos dos Animais Abandonados há 17 anos vem cumprindo seu propósito junto a sociedade, atuando no cuidado com os animais acolhidos em nosso abrigo e na luta por políticas públicas em prol da causa animal.
                            Nossas ações na cidade de Campina Grande - PB, tem o intuito de ajudar os animais acolhidos em nosso abrigo, atualmente em número superior a 100 entre cachorros e gatos, e nesse período de Pandemia estendendo nossas ações aos animais abandonados nas ruas de nossa cidade.`.substring(
                0,
                400
              ) + "..."}
            </span>
            <div style={{ marginTop: 10 }}>
              <a href={"/a4"}>Visitar página</a>
            </div>
          </div>
        </AboutContainer>
      </Content>
    </>
  );
}

export default EventDetails;
