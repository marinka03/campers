import styled from "styled-components";
import assets from "../../assets/pinterest_profile_image.png";
import { theme } from "../../vars";


export const TitleAboutUs = styled.h1`
    font-size: 32px;
    text-align: center;
    margin-bottom: 44px;
    color: orangered;
`

export const WelcomeDescription = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`;

export const WelcomeDescriptionText = styled.div`
  width: 762px;
  height: 325px;
  font-size: 20px;
`;

export const Bg = styled.div`
  background-image: url(${assets});
  height: 500px;
  background-repeat: no-repeat;
  width: 330px;
  height: 330px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const StyledSection = styled.section`
  margin-top: 163px;
`;

export const StyledSecondTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  color: black;
  font-size: 28px;
  color: orangered;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const StyledItem = styled.li`
  border-radius: 20px;
  width: 460px;
  height: 200px;
  background-color: ${theme.color.block_features};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 2px solid orangered;
  }
`;
