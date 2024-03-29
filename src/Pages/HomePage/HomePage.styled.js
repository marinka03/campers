import styled from "styled-components";
import { theme } from "../../vars";

export const Bg = styled.div`
  background-position: right;
  height: 100vh;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  bottom: 0;
  z-index: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
    to right bottom,
    #041836,
    #004373,
    #00738f,
    #00a377,
    #14cc29
  );

  @media (min-width: ${theme.breakpoint.md}) {
    height: 400px;
    background-image: url("	https://tboutdoorrentals.com/wp-content/w3-webp/uploads/2019/11/aucapina-0849641095.jpgw3.webp");
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
export const StyledSection = styled.section`
  width: 85%;
  margin: 120vh auto 64px;
  @media (min-width: ${theme.breakpoint.md}) {
    margin: 550px auto 64px;
    width: 100%;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 65px;
  letter-spacing: 6px;
  line-height: 80px;
  color: ${theme.color.light};
  font-family: "Abril Fatface", serif;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 64px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    font-size: 78px;
    letter-spacing: 3px;
    line-height: 89px;
    width: 805px;
  }
`;

export const Slogan = styled.p`
  color: ${theme.color.light};
  font-size: 20px;
  position: absolute;
  display: block;
  width: 330px;
  top: 65%;
  left: 10%;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 22px;
    width: 500px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    font-size: 25px;
  }
`;

export const WelcomeDescription = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  margin-bottom: 100px;
`;

export const WelcomeDescriptionText = styled.div`
  font-size: 20px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  justify-items: center;
  @media (min-width: ${theme.breakpoint.xl}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 44px;
    grid-row-gap: 44px;
  }
`;

export const StyledItem = styled.li`
  border-radius: 20px;
  width: 100%;
  background-color: ${theme.color.block_features};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 25px;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 22px;
    width: 440px;
  }
`;
