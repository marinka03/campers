import { v4 as uuid } from "uuid";
import { StyledItem, StyledList } from "./FilterListCard.styled";
import { selectorCatalogItems } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ABBREVIATION_STR = ["TV", "CD", "AC"];

const convertToNormalStr = (str) => {
  const capitalizedStr = str[0].toUpperCase() + str.slice(1);
  if (str === "airConditioner") {
    return "Air conditioner";
  } else if (ABBREVIATION_STR.some((item) => item === str)) {
    return str.toUpperCase();
  } else if (!str.split("").includes(/[A-Z]/)) {
    return capitalizedStr;
  }
};

function FilterListCard() {
  const items = useSelector(selectorCatalogItems);
  
  const arrFilter = Object.entries(items).map((item, id) =>
    item[1] > 0 ? convertToNormalStr(item[0]) : ""
  ); // FOR EXAMPLE
  return (
    <StyledList>
      {arrFilter.length > 7 ? arrFilter.slice(0,7)
      .filter((item) => item !== "")
        .map((item, idx) => (
          <StyledItem key={uuid()}>{item}</StyledItem> //mojna class 
        )) :
        arrFilter.filter((item) => item !== "")
          .map((item) => (
            <StyledItem key={uuid()}>{item}</StyledItem>
          ))}
    </StyledList>
  );
}

export default FilterListCard;
