import styled from "styled-components";

export const Content = styled.div`
  margin-top: 10px;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;

  display: grid;
  gap: 20px;
  grid-template:
    "location location location location"
    "description description description description"
    "socials socials socials socials"
    "events-options events-options events-options events-options"
    "events events events events";

  .location {
    text-align: center;
    grid-area: location;
  }

  .description {
    margin-top: 20px;
    text-align: center;
    grid-area: description;
  }

  .socials {
    margin-top: 20px;
    grid-area: socials;
    text-align: center;
  }

  .events-options {
    grid-area: events-options;
  }

  .events {
    grid-area: events;
  }

  @media (max-width: 700px) {
    grid-template:
      "location location location"
      "description description description"
      "socials socials socials"
      "events-options events-options events-options"
      "events events events";

    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(290px, auto);
  grid-gap: 20px;
  grid-auto-flow: dense;
  padding: 0px;
  margin: 40px auto;
  transition: all 0.5s;

  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));
  justify-content: center;
  width: ${({ maxSize }) => maxSize || "1900px"};
  max-width: ${({ maxSize }) => maxSize || "1900px"};

  @media (max-width: 4000px) {
    width: 1900px;
  }

  @media (max-width: 2510px) {
    width: 1900px;
  }

  @media (max-width: 2200px) {
    width: 1670px;
  }

  @media (max-width: 1890px) {
    width: 1360px;
  }

  @media (max-width: 1580px) {
    width: 1050px;
  }

  @media (max-width: 1270px) {
    width: 740px;
  }

  @media (max-width: 1100px) {
    width: 420px;
  }

  @media (max-width: 710px) {
    width: 580px;
  }

  @media (max-width: 493px) {
    width: 280px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -140px;
`;
export const Logo = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 125px;
  object-fit: cover;
  border: 1px solid #000;
  background: #fff;
`;
