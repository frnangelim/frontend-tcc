import React from "react";
import { useHistory } from "react-router-dom";
import CustomImage from "../../CustomImage";
import Container, {
  BackgroundImage,
  OverLay,
  OverLayClickable,
  TopBlock,
  BlockDescription,
  Description,
  Slug,
  SlugBox,
} from "./style";

function FeedBlock(props) {
  const history = useHistory();

  const getBlockSize = () => {
    return "BLOCK";
  };

  const OLD_EVENT = new Date() > new Date(props.item.date);
  const OLD_COLOR = "#828282";

  return (
    <Container $size={getBlockSize()} slugMarginTopShow={-20}>
      <BackgroundImage>
        <CustomImage alt="todo" src={props.item.image} />
      </BackgroundImage>
      <OverLay />
      <OverLayClickable
        onClick={() => history.push(`/evento/${props.item.slug}`)}
        href="javascript:void(0);"
      />
      <TopBlock></TopBlock>

      <div style={{ position: "absolute", top: 20, left: 9, zIndex: 99 }}>
        <span
          style={{
            color: OLD_EVENT ? OLD_COLOR : null,
            background: OLD_EVENT ? "#3B3B3B" : "#DD9847",
            padding: 8,
            borderRadius: 20,
          }}
        >
          {new Date(props.item.date).toLocaleDateString()}
        </span>
      </div>

      <BlockDescription>
        <Description>
          <h3
            dangerouslySetInnerHTML={{ __html: props.item.title }}
            style={{
              color: OLD_EVENT ? OLD_COLOR : null,
            }}
          />
          <span
            style={{
              color: OLD_EVENT ? OLD_COLOR : null,
            }}
          >
            {props.item.type === "IN_PERSON" ? "PRESENCIAL" : "REMOTO"}
          </span>
        </Description>
      </BlockDescription>

      <SlugBox>
        <Slug
          onClick={() => history.push(`/evento/${props.item.slug}`)}
          href="javascript:void(0);"
          $color={"white"}
        >
          Acessar
        </Slug>
      </SlugBox>
    </Container>
  );
}

export default FeedBlock;
