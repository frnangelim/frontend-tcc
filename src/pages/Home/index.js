import React from "react";
import { Grid } from "../../components/Feed/Block/style";
import FeedBlock from "../../components/Feed/Block";
import MainPhoto from "../../assets/images/bgprincipal.png";
import { Banner } from "../../styles/General.style";
import { HomeTitle, HomeTitleContainer } from "./styles";

function Home() {
  return (
    <div>
      <Banner alt="Foto principal" src={MainPhoto} />

      <HomeTitleContainer>
        <HomeTitle>Engajando com instituições</HomeTitle>
      </HomeTitleContainer>

      <Grid>
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
        <FeedBlock />
      </Grid>
    </div>
  );
}

export default Home;
