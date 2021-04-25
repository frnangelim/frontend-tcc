import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { Content, Grid, Logo, LogoContainer } from "./styles";
import MainPhoto from "../../assets/images/a4banner.jpeg";
import LogoA4 from "../../assets/images/a4.jpeg";
import Instagram from "../../assets/icons/btnround.insta.png";
import Facebook from "../../assets/icons/btnround.facebook.png";
import Whatsapp from "../../assets/icons/btround.whatsapp.png";
import Website from "../../assets/icons/btround.site.png";
import FeedBlock from "../../components/Feed/Block";
import {
  Banner,
  Share,
  OrangeSpan,
  LoadingContainer,
  Loading,
} from "../../styles/General.style";

import * as UserService from "../../services/UserService";

function UserPage(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const slug = props.match && props.match.params.slug;
      const response = await UserService.getOne(slug);
      console.log("r", response);
      setUser(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading color={"#DC3736"} />
        </LoadingContainer>
      ) : (
        <>
          <div>
            <div>
              <div>
                <Banner alt="Foto principal" src={MainPhoto} />
                <Share href={"/evento/slug"}>Compartilhar</Share>
              </div>
            </div>

            <LogoContainer>
              <div>
                <Logo
                  src={user.profileImage ? user.profileImage : LogoA4}
                  alt={"Logo"}
                />
              </div>
            </LogoContainer>

            <h1 style={{ textAlign: "center" }}>{user.fullName}</h1>
          </div>
          <Content>
            {user.address && (
              <div className={"location"}>
                <FiMapPin />
                <OrangeSpan>{user.address}</OrangeSpan>
              </div>
            )}

            <div className={"description"}>
              <span>{user.bio}</span>
            </div>

            <div className={"socials"}>
              {user.instagramUrl && (
                <img
                  src={Instagram}
                  alt={"Instagram"}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(user.instagramUrl, "_blank").focus()
                  }
                />
              )}
              {user.facebookUrl && (
                <img
                  src={Facebook}
                  alt={"Facebook"}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(user.facebookUrl, "_blank").focus()
                  }
                />
              )}
              {user.websiteUrl && (
                <img
                  src={Website}
                  alt={"Website"}
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(user.websiteUrl, "_blank").focus()}
                />
              )}
              {user.whatsappNumber && (
                <img
                  src={Whatsapp}
                  alt={"Whatsapp"}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window
                      .open(
                        `https://api.whatsapp.com/send?phone=${user.whatsappNumber}`,
                        "_blank"
                      )
                      .focus()
                  }
                />
              )}
            </div>

            {user.events && user.events.length > 0 && (
              <div className={"events"}>
                <h2 style={{ textAlign: "center" }}>Próximos eventos</h2>
                <Grid>
                  {/* <FeedBlock />
                  <FeedBlock />
                  <FeedBlock />
                  <FeedBlock />
                  <FeedBlock /> */}
                </Grid>
              </div>
            )}
          </Content>
        </>
      )}
    </>
  );
}

export default UserPage;
