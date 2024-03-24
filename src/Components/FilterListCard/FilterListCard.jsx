import { v4 as uuid } from "uuid";
import { StyledItem, StyledList } from "./FilterListCard.styled";
// import { selectorCatalogItems } from "../../redux/selectors";
// import { useSelector } from "react-redux";
import { PiTelevisionLight } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { LiaGasPumpSolid } from "react-icons/lia";
import sprite from "../../assets/icons/icons-sprite.svg";

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

function FilterListCard({ details }) {
  const arrFilter = Object.entries(details)
    .filter((item, id) => typeof item[1] !== "string" && item[1] > 0)
    .map((item) => [convertToNormalStr(item[0]), item[1]]);

  return (
    <StyledList>
      {arrFilter.length > 7 ////ADD IF FOR MODAL TO SHOW ALL ITEMS
        ? arrFilter
            .slice(0, 7)
            .filter((item) => item !== "")
            .map((item, idx) => (
              <StyledItem key={uuid()}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  {item[0] === "TV" && <PiTelevisionLight size={20} />}
                  {item[0] === "Shower" && <LuShowerHead />}
                  {item[0] === "Petrol" && <LiaGasPumpSolid />}
                  {item[0] !== "TV" &&
                    item[0] !== "Shower" &&
                    item[0] !== "Bathroom" && (
                      <svg width={20} height={20}>
                        <use href={`${sprite}#${item[0].toLowerCase()}`} />
                      </svg>
                    )}

                  {item[1] > 1 && item[1]}
                  <span>{item[0]}</span>
                </div>
              </StyledItem> //mojna class
            ))
        : arrFilter
            .filter((item) => item !== "")
            .map((item) => (
              <StyledItem key={uuid()}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <svg width={20} height={20}>
                    <use href={`${sprite}#${item[0].toLowerCase()}`} />
                  </svg>
                  <span>{item[0]}</span>
                </div>
              </StyledItem>
            ))}
    </StyledList>
  );
}

export default FilterListCard;
