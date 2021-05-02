import React, { useEffect, useState } from "react";
import { Grid } from "../../components/Feed/Block/style";
import FeedBlock from "../../components/Feed/Block";
import { Ellipsis } from "react-spinners-css";
import MainPhoto from "../../assets/images/home.jpeg";
import Elements from "../../assets/images/elementos1.png";
import { Banner, LoadingContainer, Loading } from "../../styles/General.style";
import {
  HomeTitle,
  HomeTitleContainer,
  SearchContainer,
  SearchInput,
  Centered,
} from "./styles";
import * as EventService from "../../services/EventService";
import { Form } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const PAGE_SIZE = 20;

function Home() {
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [endOfHotData, setEndOfHotData] = useState(false);
  const [endOfAllData, setEndOfAllData] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await EventService.getAll({
        page,
        limit: PAGE_SIZE,
        hotData: !endOfHotData,
        search: search,
      });
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

  const doSearch = async () => {
    setData([]);
    setFetching(true);
    setPage(1);
    const response = await EventService.getAll({
      page: 1,
      limit: PAGE_SIZE,
      hotData: true,
      search: search,
    });
    setData(response.items);
    setFetching(false);
  };

  const getMore = async (page) => {
    try {
      setPage(page);
      const response = await EventService.getAll({
        page,
        limit: PAGE_SIZE,
        hotData: !endOfHotData,
        search: search,
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
          <Loading color={"#409BD6"} />
        </LoadingContainer>
      ) : (
        <div>
          <Banner alt="Foto principal" src={MainPhoto} />

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              doSearch();
            }}
          >
            <SearchContainer>
              <SearchInput
                value={search}
                placeholder={"Pesquisar pelo nome do evento ou localização"}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FiSearch
                style={{ marginLeft: -40, height: 45, cursor: "pointer" }}
                onClick={() => doSearch()}
              />
            </SearchContainer>
          </Form>

          <HomeTitleContainer>
            <img
              src={Elements}
              style={{
                width: 50,
                height: 50,
                transform: "scale(-1, 1)",
                marginTop: 5,
                marginRight: -15,
              }}
              alt="Elementos"
            />
            <HomeTitle>Engajando com eventos</HomeTitle>
            <img
              src={Elements}
              style={{ width: 50, height: 50, marginTop: 5, marginLeft: -20 }}
              alt="Elementos"
            />
          </HomeTitleContainer>

          {data.length > 0 ? (
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
          ) : (
            <Centered>
              <br />
              <span>Nenhum evento encontrado.</span>
            </Centered>
          )}

          {fetching ? (
            <Centered>
              <Ellipsis />
            </Centered>
          ) : undefined}
        </div>
      )}
    </>
  );
}

export default Home;
