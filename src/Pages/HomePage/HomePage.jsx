import { StyledSection, Bg,StyledSecondTitle, StyledList, StyledItem } from "./HomePage.styled.js";

function HomePage() {
  return (
    <>
      <StyledSection>
        <h1>Welcome</h1>
        <Bg />
        <StyledSecondTitle>Our advantages</StyledSecondTitle>
        <StyledList>
          <StyledItem>
            <b>Freedom and Flexibility: </b> A camper allows for travel without
            being tied to hotels or other forms of accommodation. Customers can
            move freely, stopping wherever they please.
          </StyledItem>
          <StyledItem>
            <b>Comfort and Convenience: </b>
            Campers often have all the necessary amenities such as beds,
            kitchen, toilet, and shower, making trips comfortable and
            convenient.
          </StyledItem>
          <StyledItem>
            <b>Cost Savings: </b>
            Renting a camper can be more economical than hotel stays, especially
            for longer trips or group vacations.
          </StyledItem>
          <StyledItem>
            <b>Natural Relaxation: </b>
            Camper travel allows customers to enjoy nature and be closer to it,
            as they can stop in different places away from the urban noise.
          </StyledItem>
          <StyledItem>
            <b>Family and Friendly Atmosphere: </b>
            Camper travel is a great option for family vacations or trips with
            friends, fostering bonding and shared adventures.
          </StyledItem>
          <StyledItem>
            <b>Environmental Awareness: </b>
            Campers can contribute to a more eco-friendly way of traveling,
            reducing emissions and environmental impact.
          </StyledItem>
        </StyledList>
      </StyledSection>
    </>
  );
}

export default HomePage;
