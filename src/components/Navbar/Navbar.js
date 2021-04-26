import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { useHistory } from "react-router-dom";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="javascript:void(0);" onClick={() => history.push("/")}>
              Home
            </a>
            {props.userLogged ? (
              <>
                <a
                  href="javascript:void(0);"
                  onClick={() => history.push("/meus-eventos")}
                >
                  Eventos
                </a>
                <a
                  href="javascript:void(0);"
                  onClick={() => history.push("/meu-perfil")}
                >
                  Perfil
                </a>
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    history.push("/entrar");
                    props.logout();
                  }}
                >
                  Sair
                </a>
              </>
            ) : (
              <a
                href="javascript:void(0);"
                onClick={() => history.push("/entrar")}
              >
                Entrar
              </a>
            )}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={open}
              handleNavbar={() => setOpen(!open)}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        {...props}
        navbarState={open}
        handleNavbar={() => setOpen(!open)}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 10;
  font-size: 1rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 7vh;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #585995 !important;
      border-bottom: 1px solid #585995;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
