import { useDispatch, useSelector } from "react-redux";
// import Button from "../../Components/Button/Button.jsx";
import { StyledSection, Bg } from "./HomePage.styled.js";
import { selectorSetVelue } from "../../redux/selectors.js";
import { decrement, increment } from "../../redux/catalogSlice.js";

function HomePage() {
  const dispatch = useDispatch();
  const value = useSelector(selectorSetVelue);
  return (
    <>
      <StyledSection>
        <Bg />
        home page with a general description of the services provided by the
        company
        <div
          style={{
            display: "flex",
            width: "100px",
            height: "50px",
            gap: "20px",
          }}
        >
          <button text="+" onClick={() => dispatch(increment())} >{value}</button>
          
          <button text="-" onClick={() => dispatch(decrement())} >{value}</button>
        </div>
      </StyledSection>
    </>
  );
}

export default HomePage;
