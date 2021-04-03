import styled, { keyframes } from "styled-components";

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

export const Banner = styled.img`
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
