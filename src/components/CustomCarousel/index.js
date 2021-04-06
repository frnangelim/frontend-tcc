import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

function CustomCarousel(props) {
  return (
    <Carousel
      ssr={true}
      responsive={responsive}
      draggable={true}
      showDots={false}
      centerMode={false}
      renderDotsOutside={false}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass={"carousel-container"}
      swipeable={true}
      transitionDuration={500}
      partialVisbile={true}
    >
      {props.items.map((item) => props.component(item))}
    </Carousel>
  );
}

export default CustomCarousel;
