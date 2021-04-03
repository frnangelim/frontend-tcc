import React from "react";
import { Grid } from "../../components/Feed/Block/style";
import FeedBlock from "../../components/Feed/Block";
import MainPhoto from "../../assets/images/bgprincipal.png";
import { Banner } from "../../styles/General.style";

function Home() {
  return (
    <div>
      <Banner alt="Foto principal" src={MainPhoto} />

      <h1 style={{ textAlign: "center", marginTop: 20 }}>
        Engajando com instituições
      </h1>
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
