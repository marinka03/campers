import { StyledItem, StyledList } from "./FilterListCard.styled";

function FilterListCard() {
  const arrFilter = ["Automatic", "Microwave", "Shower"]; // FOR EXAMPLE
  return (
    <StyledList>
      {arrFilter.map((item, idx) => (
        <StyledItem key={idx}>{item}</StyledItem>
      ))}
    </StyledList>
  );
}

export default FilterListCard;
