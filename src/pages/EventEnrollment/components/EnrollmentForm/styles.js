import styled from "styled-components";

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;
  
  display: grid;
	gap: 20px;
	grid-template: "information information information information"
                 "form form form form";
				
	.information {
		grid-area: information;
    text-align: center;
	}
  .form {
    grid-area form;
    margin-top: 30px;
  }
  
  @media (max-width: 700px) {
    grid-template: "information information information information"
                    "form form form form";
                  
    margin-left: 20px;
    margin-right: 20px; 
	}
	
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TopHorizontalLine = styled.div`
  border-bottom: 2px solid #ccc;
  height: 1px;
  margin-bottom: 40px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const BottomHorizontalLine = styled.div`
  border-bottom: 2px solid #ccc;
  height: 1px;
  margin-top: 60px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const FormContainer = styled.div`
  margin-top: 30px;
`;

export const InnerContainer = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 40%;
  background: #828282;
  color: #fff;
  border: none;
  cursor: pointer;
`;
