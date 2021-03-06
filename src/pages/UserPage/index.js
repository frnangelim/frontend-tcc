import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import {
  Content,
  Grid,
  Logo,
  LogoContainer,
  DefaultBackground,
} from "./styles";
import DefaultUserPicture from "../../assets/icons/gaja_symbol.png";
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
  PreviewContainer,
  PreviewText,
} from "../../styles/General.style";

import * as UserService from "../../services/UserService";

function UserPage(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let user;
      if (props.preview) {
        const response = localStorage.getItem("USER_PREVIEW");
        if (response) {
          user = JSON.parse(response);
        }
      } else {
        console.log("? ");
        const slug = props.match && props.match.params.slug;
        user = await UserService.getOne(slug);
      }

      setUser(user);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading color={"#409BD6"} />
        </LoadingContainer>
      ) : (
        <>
          <div>
            <div>
              <div>
                {user.coverImage ? (
                  <>
                    <Banner
                      alt="Foto principal"
                      src={user.coverImage && user.coverImage}
                    />
                    <Share
                      href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                      target="_blank"
                    >
                      Compartilhar
                    </Share>
                  </>
                ) : (
                  <DefaultBackground />
                )}
              </div>
            </div>

            <LogoContainer>
              <div>
                <Logo
                  src={
                    user.profileImage ? user.profileImage : DefaultUserPicture
                  }
                  alt={"Logo"}
                  style={{ objectFit: user.profileImage ? "cover" : "none" }}
                />
                <Share
                  href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                  target="_blank"
                >
                  Compartilhar
                </Share>
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
                <h2 style={{ textAlign: "center" }}>Pr??ximos eventos</h2>
                <Grid>
                  {user.events.map((event, index) => (
                    <FeedBlock item={event} key={index} />
                  ))}
                </Grid>
              </div>
            )}

            {props.preview && (
              <PreviewContainer>
                <PreviewText>PR??-VISUALIZA????O</PreviewText>
              </PreviewContainer>
            )}
          </Content>
        </>
      )}
    </>
  );
}

export default UserPage;
