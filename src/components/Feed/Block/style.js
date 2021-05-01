import styled from "styled-components";

export const BackgroundImage = styled.div`
  img {
    object-fit: cover;
    position: absolute;
    visibility: visible;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  z-index: 2;
  transition: 0.2s all;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const OverLayClickable = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  z-index: 2;
  transition: 0.2s all;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OverLayDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  z-index: 2;
  transition: 0.2s all;

  section {
    margin: 18px;
    margin: 18px;
    position: relative;
    height: calc(100% - 70px);

    p {
      position: absolute;
      bottom: 0;
      margin: auto;
      font-style: italic;
      font-weight: 500;
      line-height: 24px;
      font-size: 16px;
      text-align: center;
    }
  }
`;

export const SlugBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const Slug = styled.a`
  font-size: 16px;
  z-index: 3;
  border: 1.8px solid ${({ $color, theme }) => $color || "white"};
  color: ${({ $color, theme }) => $color || "white"};
  padding: 10px;
  opacity: 0;
  border-radius: 50px;
  margin: 0 auto;
  text-decoration: none;

  transform: translateY(100px);
  transition: transform 1s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  display: block;
  animation: colorChange 3000ms ease var(--delay) infinite both;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => "white"};
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 300px;
  max-width: 300px;

  ${({ $size }) => containerSize($size)}

  &:nth-child(4n - 2) {
    --delay: 1000ms;
  }

  &:nth-child(4n) {
    --delay: 2000ms;
  }

  :hover {
    ${OverLay} {
      opacity: 0.8;
      transition: 1s all;
    }

    ${OverLayClickable} {
      opacity: 0.8;
      transition: 1s all;
    }

    ${OverLayDiv} {
      opacity: 0.8;
      transition: 1s all;
    }

    ${BackgroundImage} {
      img {
        transform: scale(1.1) rotate(-2deg);
        -webkit-filter: blur(2px);
        filter: blur(2px);
        transition: transform 1s ease;
      }
    }

    ${Slug} {
      margin-top: ${({ slugMarginTopShow }) =>
        slugMarginTopShow !== undefined ? slugMarginTopShow : 80}px;
      display: block;
      transform: translateY(0px);
      transition: all 1s ease-in-out;
      opacity: 1;
      transition: opacity 0.5s linear;
    }
  }
`;

const containerSize = (type) => {
  switch (type) {
    case "BLOCK":
      return `
                max-width: 300px;
                max-height: none;
            `;
    case "BIG":
      return `
                max-width: 620px;
                max-height: none;
                grid-column-end: span 2;
                grid-row-end: span 2;

                @media (max-width: 1270px) {
                    grid-column-end: span 2;
                    grid-row-end: span 2;
                }

                @media (max-width: 710px) {
                    grid-column-end: span 1;
                    grid-row-end: span 1;
                }
        `;
    case "COLUMN":
      return `
                max-width: 300px;
                grid-column-end: span 1;
                grid-row-end: span 2;
                max-height: none;

                @media (max-width: 710px) {
                    grid-column-end: span 1;
                    grid-row-end: span 2;
                }

                @media (max-width: 493px) {
                    grid-column-end: span 1;
                    grid-row-end: span 2;
                }
        `;
    case "WIDE":
      return `
                max-width: 940px;
                max-height: none;
                grid-column-end: span 3;
                grid-row-end: span 2;

                @media (max-width: 2510px) {
                    grid-column-end: span 3;
                    grid-row-end: span 2;
                }

                @media (max-width: 2200px) {
                    grid-column-end: span 3;
                    grid-row-end: span 2;
                }

                @media (max-width: 1890px) {
                    grid-column-end: span 3;
                    grid-row-end: span 2;
                }

                @media (max-width: 1580px) {
                    grid-column-end: span 3;
                    grid-row-end: span 2;
                }

                @media (max-width: 1270px) {
                    grid-column-end: span 3;
                    grid-row-end: span 2;
                }

                @media (max-width: 1100px) {
                    grid-column-end: span 2;
                    grid-row-end: span 2;
                }

                @media (max-width: 710px) {
                    grid-column-end: span 1;
                    grid-row-end: span 1;
                }

                @media (max-width: 493px) {
                    grid-column-end: span 1;
                    grid-row-end: span 1;
                }
        `;
    default:
      return `
                
            `;
  }
};

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(290px, auto);
  grid-gap: 20px;
  grid-auto-flow: dense;
  padding: 0px;
  margin: 40px auto;
  transition: all 0.5s;

  grid-template-columns: repeat(auto-fit, minmax(290px, 290px));
  justify-content: center;
  width: ${({ maxSize }) => maxSize || "1900px"};
  max-width: ${({ maxSize }) => maxSize || "1900px"};

  @media (max-width: 4000px) {
    width: 1900px;
  }

  @media (max-width: 2510px) {
    width: 1900px;
  }

  @media (max-width: 2200px) {
    width: 1870px;
  }

  @media (max-width: 1890px) {
    width: 1560px;
  }

  @media (max-width: 1580px) {
    width: 1250px;
  }

  @media (max-width: 1270px) {
    width: 940px;
  }

  @media (max-width: 1100px) {
    width: 620px;
  }

  @media (max-width: 710px) {
    width: 600px;
  }

  @media (max-width: 493px) {
    width: 300px;
  }
`;

export const BlockDescription = styled.div`
  text-align: left;
  z-index: 3;
  position: absolute;
  display: block;
  bottom: 0px;
  color: #ffffff;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

export const Description = styled.div`
  text-shadow: 2px 2px 6px #000000;
  z-index: 3;
  max-width: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 12px;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 0 0px 0px;
    font-size: 18px;
    font-weight: 800;
    max-width: inherit;
    color: ${({ theme }) => "white"};
    line-height: 20px;
  }
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 5px 0 0px 0px;
    font-size: 13px;
    font-weight: 500;
    font-style: italic;
    max-height: 11px;
    display: block;
    max-height: 15px;
    max-width: inherit;
    color: ${({ theme }) => "white"};
  }
`;

export const TopBlock = styled.div`
  position: relative;
  padding: 20px;
  z-index: 3;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export default Container;
