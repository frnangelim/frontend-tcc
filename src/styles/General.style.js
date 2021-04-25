import styled, { keyframes } from "styled-components";
import { Label, Button } from "reactstrap";
import { Heart } from "react-spinners-css";
import CustomImage from "../components/CustomImage";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid blue;
  border-right: 2px solid blue;
  border-bottom: 2px solid blue;
  border-left: 4px solid dark blue;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  margin: 100px auto;
  position: relative;
`;

export const OrangeSpan = styled.span`
  color: #dd9847;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
`;

export const Banner = styled(CustomImage)`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

export const Share = styled.a`
  position: absolute;
  top: 70px;
  right: 20px;
  color: white;
  background: #dd9847;
  padding: 12px;
  border-radius: 50px;
  font-weight: bold;
`;

export const EventTitleContainer = styled.div`
  background: #3b3b3b;
`;

export const EventTitle = styled.h1`
  color: white;
  text-align: center;
  margin-top: -7px;
  padding: 20px;
`;

export const HorizontalLine = styled.div`
  border-bottom: 2px solid #ccc;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 1px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
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

export const CustomLabel = styled(Label)`
  float: left;
  font-weight: bold;
`;

export const CustomButton = styled(Button)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorSpan = styled.span`
  color: red;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Loading = styled(Heart)`
  left: 50%;
  top: 50%;
`;

export const FloatButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #409bd6;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  line-height: 54px;
  font-size: 40px;
  cursor: pointer;
`;
