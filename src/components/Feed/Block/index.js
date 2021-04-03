import React from "react";
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

function FeedBlock() {
  const getBlockSize = () => {
    return "BLOCK";
  };

  return (
    <Container $size={getBlockSize()} slugMarginTopShow={-20}>
      <BackgroundImage>
        <img
          alt="todo"
          src={
            "http://i1.wp.com/www.cavida.org/wp-content/uploads/2018/05/voluntario.jpg?fit=810%2C552"
          }
        />
      </BackgroundImage>
      <OverLay />
      <OverLayClickable href={`/evento/slug`} />
      <TopBlock>
        <span>Categoria</span>
      </TopBlock>

      <BlockDescription>
        <Description>
          <h3 dangerouslySetInnerHTML={{ __html: "Título do evento" }} />
          <span>Subtítulo</span>
        </Description>
      </BlockDescription>

      <SlugBox>
        <Slug href={`/evento/slug`} $color={"white"}>
          Acessar
        </Slug>
      </SlugBox>
    </Container>
  );
}

export default FeedBlock;
