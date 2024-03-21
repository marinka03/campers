import CatalogFilterItem from "../CatalogFilterItem/CatalogFilterItem";
import campers from "../../campers.json";
import { StyledList } from "./CatalogFilterList.styled";

function CatalogFilterList() {
  const CAMPERS_LIST = campers;
  return (
    <StyledList>
      {CAMPERS_LIST.length > 0 &&
        CAMPERS_LIST.map((item, idx) => (
            <CatalogFilterItem item={item}/>
        ))}
    </StyledList>
  );
}

export default CatalogFilterList;
