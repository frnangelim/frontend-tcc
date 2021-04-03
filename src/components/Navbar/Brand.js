import React from 'react'
import {useHistory} from "react-router-dom";

import styled from "styled-components";
import logo from "../../assets/icons/icongaja.png";

const Brand = () => {
  const history = useHistory();

  return (
    <Image src={logo} alt="Logo principal" onClick={() => history.push('/')}/>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
  cursor: pointer;
`;
