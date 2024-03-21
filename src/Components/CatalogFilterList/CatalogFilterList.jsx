import CatalogFilterItem from "../CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "./CatalogFilterList.styled";
import { useSelector } from "react-redux";
import { selectorCatalogItems } from "../../redux/selectors";

function CatalogFilterList() {
  const CAMPERS_LIST = useSelector(selectorCatalogItems);
  return (
    <StyledList>
      {CAMPERS_LIST.length > 0 &&
        CAMPERS_LIST.map((item, idx) => (
          <CatalogFilterItem key={idx} item={item} />
        ))}
    </StyledList>
  );
}

export default CatalogFilterList;
