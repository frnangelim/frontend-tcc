import styled from "styled-components";
import { Input } from "reactstrap";

export const HomeTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeTitle = styled.h3`
  color: #3b3b3b, 100%;
  text-align: center;
  margin-top: -7px;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  background-color: #3b3b3b;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled(Input)`
  width: 40%;
  padding-right: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Centered = styled.div`
  text-align: center;
`;
