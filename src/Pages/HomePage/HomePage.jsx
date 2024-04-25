import Footer from "../../Components/Footer/Footer.jsx";
import {
  Title,
  Slogan,
  StyledSection,
  WelcomeDescription,
  Bg,
  WelcomeDescriptionText,
  StyledList,
  StyledItem,
} from "./HomePage.styled.js";

function HomePage() {
  return (
    <>
      <Bg>
        <Title>T<span style={{ fontFamily: "Petit Formal Script"}}>h</span>is i<span style={{ fontFamily: "Petit Formal Script"}}>s</span> your journe<span style={{ fontFamily: "Petit Formal Script"}}>y!</span></Title>
        <Slogan>
          Where every journey becomes your adventure! Rent a camper and embark
          on endless adventures with us!
        </Slogan>
      </Bg>

      <StyledSection>
        <WelcomeDescription>
          <div>
            <img
              loading="lazy"
              src="https://tboutdoorrentals.com/wp-content/w3-webp/uploads/2023/03/TB_Van_18-1536x1024.jpgw3.webp"
              alt="Camper van"
            />
          </div>
          <WelcomeDescriptionText>
            Are you looking for adventure and unforgettable journeys? Welcome to
            our company "Campers"! We will help you make your travel dreams a
            reality by providing you with the most comfortable and stylish
            camper rentals in Ukraine. What makes our company special? Our
            campers are not just vehicles, they are your homes on wheels,
            accompanying you on all your adventures. Whether you are traveling
            as a couple, with family, or with friends, we have the perfect
            camper to meet your needs and desires. So, if you dream of exciting
            travels and new experiences, turn to "Campers" and let us make your
            next journey the best one yet!
          </WelcomeDescriptionText>
        </WelcomeDescription>

        <StyledList>
          <StyledItem>
            <b>Variety of Models: </b> You can choose a camper that suits your
            needs and budget. From comfortable family campers to economical
            options for couples - we have something for everyone.
          </StyledItem>
          <StyledItem>
            <b>Comfort and Convenience: </b>
            Our campers are equipped with everything you need for comfortable
            living on the road. You'll find a kitchen with a refrigerator and
            stove, sleeping areas, bathrooms, and much more.
          </StyledItem>
          <StyledItem>
            <b>Ease of Use: </b>
            Our campers are easy to drive and maneuver, making journeys
            enjoyable and safe for everyone.
          </StyledItem>
          <StyledItem>
            <b>Customer Support: </b>
            Our friendly team is always ready to assist you with any questions
            or issues during your journey.
          </StyledItem>
        </StyledList>
      </StyledSection>

      <Footer />
    </>
  );
}

export default HomePage;
