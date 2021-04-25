import styled from "styled-components";
import CustomImage from "../../components/CustomImage";

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;
  
  display: grid;
	gap: 20px;
	grid-template: "location location date date"
	               "description description description description"
                   "gaja gaja gaja gaja"
                   "about about about about";
				
	.date {
    text-align: right;
		grid-area: date;
	}

	.location {
    text-align: left;
		grid-area: location;
	}
	
	.description {
    grid-area: description;
	}

  .gaja {
    grid-area gaja;
    margin-top: 40px;
  }

  .about {
    grid-area: about;
  }
  
  @media (max-width: 700px) {
  grid-template: "location location location"
                "date date date"
                "description description description"
                "gaja gaja gaja"
                "about about about";       
                  
    margin-left: 20px;
    margin-right: 20px; 
      
    .date {
      text-align: center;
      grid-area: date;
    }

    .location {
      text-align: center;
      grid-area: location;
    } 
	}
	
`;

export const AboutContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 50px;

  display: grid;
  gap: 50px;
  grid-template:
    "image text text text"
    "image text text text";

  .image {
    grid-area: image;
    height: 250x;
    width: 250px;
  }

  .text {
    grid-area: text;
  }

  @media (max-width: 700px) {
    grid-template:
      "text text"
      "image image";

    .image {
      width: 250px;
      height: 250px;
      max-width: 250px;
      max-height: 250px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Banner = styled(CustomImage)`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

export const Share = styled.a`
  position: absolute;
  top: 70px;
  right: 20px;
  color: white;
  background: #DD9847
  padding: 12px;
  border-radius: 50px;
  font-weight: bold;
`;

export const OwnerImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 125px;
  object-fit: cover;
  border: 1px solid #000;
  background: #fff;
`;
