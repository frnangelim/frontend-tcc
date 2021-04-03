import styled from "styled-components";

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;

  display: grid;
  gap: 20px;
  grid-template:
    "top top top top"
    "confirmation confirmation confirmation confirmation"
    "hints hints hints hints";

  .top {
    grid-area: top;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .confirmation {
    grid-area: confirmation;
    margin-top: 40px;
  }

  .hints {
    text-align: center;
    margin-top: 30px;
    grid-area: hints;
  }

  @media (max-width: 700px) {
    grid-template:
      "top top top"
      "confirmation confirmation confirmation"
      "hints hints hints";

    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const TopMessage = styled.span`
  font-size: 60px;
`;

export const TopHorizontalLine = styled.div`
  border-bottom: 2px solid #ccc;
  margin-bottom: 40px;
  height: 1px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const BottomHorizontalLine = styled.div`
  border-bottom: 2px solid #ccc;
  margin-top: 60px;
  height: 1px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const ConfirmationContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const GreenContainer = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  background: #80e4c6;
`;

export const PinkContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  background: #d3b5dc;
`;

export const OrangeContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  background: #ffc796;
`;

export const HintContainer = styled.div`
  margin-top: 10px;
`;
