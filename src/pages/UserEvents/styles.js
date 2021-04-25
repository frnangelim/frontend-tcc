import styled from "styled-components";
import CustomImage from "../../components/CustomImage";

export const Container = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

export const CarouselCard = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  height: 280px;
  text-align: center;
  margin-left: 20px;
`;

export const CarouselTitleContainer = styled.span`
  text-align: center;
`;

export const CarouselTitle = styled.span`
  color: #409bd6;
  font-size: 18px;
  font-weight: bold;
`;

export const EventTitleContainer = styled.div`
  background: #3b3b3b;
  margin-top: -7px;
  padding-top: 12px;
  padding-bottom: 10px;
  height: 50px;
`;

export const EventTitle = styled.span`
  color: white;
  text-align: center;
`;

export const EventImage = styled(CustomImage)`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
export const BottomContainer = styled.div`
  height: 30px;
  justify-content: center;
  line-height: 30px;
`;

export const SeeDetails = styled.a`
  color: #409bd6;
  font-size: 16px;
  cursor: pointer;

  :hover {
    color: #dd9847 !important;
  }
`;
