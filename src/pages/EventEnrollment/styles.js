import styled from "styled-components";

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
  gap: 20px;
  grid-template:
    "image text"
    "image text";

  .image {
    grid-area: image;
    height: 400px;
    width: 400px;
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

export const EnrollmentContainer = styled.div`
  background: #fff;
  padding: 40px;
  border: 1px solid #ccc;
  text-align: center;

  display: grid;
  gap: 20px;
  grid-template: "info button";
  @media (max-width: 700px) {
    grid-template:
      "info"
      "button";
  }
`;

export const EnrollmentButton = styled.a`
  color: white;
  background: #80e4c6;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 50px;
  font-weight: bold;
`;
