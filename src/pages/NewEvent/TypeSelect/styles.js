import styled from "styled-components";
import { Col } from "reactstrap";

export const TypeBox = styled(Col)`
  padding: 30px;
  border: 1px solid #ccc;
  margin-top: 20px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #409bd6;
    color: white;
  }
`;
