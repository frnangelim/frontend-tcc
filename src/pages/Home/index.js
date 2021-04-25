import React, { useEffect, useState } from "react";
import { Grid } from "../../components/Feed/Block/style";
import FeedBlock from "../../components/Feed/Block";
import { Ellipsis } from "react-spinners-css";
import MainPhoto from "../../assets/images/default_image2.png";
import { Banner, LoadingContainer, Loading } from "../../styles/General.style";
import { HomeTitle, HomeTitleContainer } from "./styles";
import * as EventService from "../../services/EventService";

const PAGE_SIZE = 20;

function Home() {
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [endOfHotData, setEndOfHotData] = useState(false);
  const [endOfAllData, setEndOfAllData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await EventService.getAll({ page, limit: PAGE_SIZE });
      setData(response.items);
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const lastElementLoaded = document.querySelector(
      ".feedblock-list > .feedblock-element:last-child"
    );
    if (
      lastElementLoaded !== null &&
      lastElementLoaded instanceof HTMLElement &&
      (!endOfAllData || !endOfHotData)
    ) {
      const lastElementLoadedOffset =
        lastElementLoaded.offsetTop + lastElementLoaded.clientHeight;

      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset + 500 > lastElementLoadedOffset) {
        setFetching(true);
        getMore(page + 1);
      }
    }
  };

  const getMore = async (page) => {
    try {
      setPage(page);
      const response = await EventService.getAll({
        page,
        limit: PAGE_SIZE,
        hotData: !endOfHotData,
      });
      setData([...data, ...response.items]);
      setFetching(false);
      if (response.items.length === 0 && !endOfHotData) setEndOfHotData(true);
      else if (response.items.length === 0 && endOfHotData)
        setEndOfAllData(true);
    } catch (error) {
      setFetching(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading color={"#DC3736"} />
        </LoadingContainer>
      ) : (
        <div>
          <Banner alt="Foto principal" src={MainPhoto} />

          <HomeTitleContainer>
            <HomeTitle>Engajando com instituições</HomeTitle>
          </HomeTitleContainer>

          <Grid className="feedblock-list">
            {data &&
              data.map((item, index) => {
                return (
                  <div className={"feedblock-element"} key={index}>
                    <FeedBlock className={"feedblock-element"} item={item} />
                  </div>
                );
              })}
          </Grid>
          {fetching ? (
            <div style={{ textAlign: "center" }}>
              <Ellipsis />
            </div>
          ) : undefined}
        </div>
      )}
    </>
  );
}

export default Home;
