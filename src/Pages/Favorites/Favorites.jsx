import React from "react";
import { useSelector } from "react-redux";
import { selectorAllItems } from "../../redux/selectors";
import CatalogFilterItem from "../../Components/CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "../../Components/CatalogFilterList/CatalogFilterList.styled";

function Favorites() {
  const items = useSelector(selectorAllItems);
  const favoriteItems = items.filter((item) => item.favorite); // why 1 have style???
  console.log("it", items);
  console.log("fav", favoriteItems);
  return (
    <section>
      <StyledList>
        {favoriteItems.length > 0 &&
          favoriteItems.map((item) => (
            <CatalogFilterItem key={item.id} parentId={item.id} />
          ))}
      </StyledList>
    </section>
  );
}

export default Favorites;
