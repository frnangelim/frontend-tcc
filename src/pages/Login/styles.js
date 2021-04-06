import styled from "styled-components";
import { Card, Label, Button } from "reactstrap";

export const CustomCard = styled(Card)`
  margin-top: 100px;
  text-align: center;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 50px;
    width: 50%;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 150px;
  }
`;

export const CustomLabel = styled(Label)`
  float: left;
  font-weight: bold;
`;

export const CustomButton = styled(Button)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const BackArrowContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  cursor: pointer;
`;

export const BottomContainer = styled.div`
  margin-top: 40px;
  cursor: pointer;
`;
