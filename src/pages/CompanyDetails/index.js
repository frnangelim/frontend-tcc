import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Content, Grid, Logo, LogoContainer } from "./styles";
import MainPhoto from "../../assets/images/a4banner.jpeg";
import LogoA4 from "../../assets/images/a4.jpeg";
import Instagram from "../../assets/icons/btnround.insta.png";
import Facebook from "../../assets/icons/btnround.facebook.png";
import Whatsapp from "../../assets/icons/btround.whatsapp.png";
import Website from "../../assets/icons/btround.site.png";
import FeedBlock from "../../components/Feed/Block";
import { Banner, Share, OrangeSpan } from "../../styles/General.style";

function CompanyDetails() {
  return (
    <>
      <div>
        <div>
          <div>
            <Banner alt="Foto principal" src={MainPhoto} />
            <Share href={"/evento/slug"}>Compartilhar</Share>
          </div>
        </div>

        <LogoContainer>
          <div>
            <Logo src={LogoA4} alt={"Logo"} />
          </div>
        </LogoContainer>

        <h1 style={{ textAlign: "center" }}>
          Associação dos Amigos dos Animais Abandonados
        </h1>
      </div>
      <Content>
        <div className={"location"}>
          <FiMapPin />
          <OrangeSpan>
            Av. Dr. Elpídio de Almeida, 215 - Catolé, Campina Grande - PB,
            58410-215
          </OrangeSpan>
        </div>
        <div className={"description"}>
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

        <div className={"socials"}>
          <img src={Instagram} alt={"Instagram"} />
          <img src={Facebook} alt={"Facebook"} />
          <img src={Website} alt={"Website"} />
          <img src={Whatsapp} alt={"Whatsapp"} />
        </div>

        <div className={"events"}>
          <h2 style={{ textAlign: "center" }}>Próximos eventos</h2>
          <Grid>
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
            <FeedBlock />
          </Grid>
        </div>
      </Content>
    </>
  );
}

export default CompanyDetails;
