import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import classnames from "classnames";

import { TabContent, TabPane, Nav, NavItem, CardBody } from "reactstrap";

import BasicInformationsForm from "./components/BasicInformationsForm";
import ImagesForm from "./components/ImagesForm";
import ExternalLinksForm from "./components/ExternalLinksForm";

import { CustomCard, CustomNavLink } from "./styles";
import {
  LoadingContainer,
  Loading,
  ErrorSpan,
} from "../../styles/General.style";
import logo from "../../assets/icons/icongaja.png";

import * as UserService from "../../services/UserService";

const TABS = {
  BASIC: 1,
  IMAGES: 2,
  EXTERNAL: 3,
};

function EditUserProfile() {
  const [activeTab, setActiveTab] = useState(TABS.BASIC);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    async function fetchData() {
      const response = await UserService.getAuthenticatedUser();
      setUser(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  const onSubmit = async (e, currentData) => {
    e.preventDefault();

    try {
      setLoading(true);
      await UserService.update(currentData);
      addToast("Perfil atualizado com sucesso!", {
        appearance: "success",
        autoDismiss: true,
      });
      setUser({ ...user, ...currentData });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      addToast(
        error && error.err
          ? error.err.message
          : "Ocorreu um erro, tente novamente.",
        {
          appearance: "error",
          autoDismiss: true,
        }
      );
    }
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading color={"#DC3736"} />
        </LoadingContainer>
      ) : (
        <CustomCard>
          <div style={{ textAlign: "center" }}>
            <img src={logo} alt="Logo" style={{ width: 60, height: 60 }} />
          </div>
          <CardBody>
            <Nav tabs>
              <NavItem>
                <CustomNavLink
                  className={classnames({ active: activeTab === TABS.BASIC })}
                  onClick={() => {
                    toggle(TABS.BASIC);
                  }}
                >
                  Pessoal
                </CustomNavLink>
              </NavItem>
              <NavItem>
                <CustomNavLink
                  className={classnames({ active: activeTab === TABS.IMAGES })}
                  onClick={() => {
                    toggle(TABS.IMAGES);
                  }}
                >
                  Imagens
                </CustomNavLink>
              </NavItem>
              <NavItem>
                <CustomNavLink
                  className={classnames({
                    active: activeTab === TABS.EXTERNAL,
                  })}
                  onClick={() => {
                    toggle(TABS.EXTERNAL);
                  }}
                >
                  Social
                </CustomNavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={TABS.BASIC}>
                <BasicInformationsForm user={user} onSubmit={onSubmit} />
              </TabPane>
              <TabPane tabId={TABS.IMAGES}>
                <ImagesForm user={user} onSubmit={onSubmit} />
              </TabPane>
              <TabPane tabId={TABS.EXTERNAL}>
                <ExternalLinksForm user={user} onSubmit={onSubmit} />
              </TabPane>
            </TabContent>
          </CardBody>
        </CustomCard>
      )}
    </>
  );
}

export default EditUserProfile;
