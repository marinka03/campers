import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogFilterItem from "../../Components/CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "../../Components/CatalogFilterList/CatalogFilterList.styled";
import { allItems } from "../../redux/operations";
import { selectorAllItems } from "../../redux/selectors";

function Favorites() {
  const items = useSelector(selectorAllItems);

  const favoriteItems = items.filter((item) => item.favorite); // why 1 have style???
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allItems());
  }, [dispatch]);
  return (
    <section style={{ marginTop: "100px" }}>
      <StyledList>
        {favoriteItems.map((item) => (
          <CatalogFilterItem key={item.id} parentId={item.id} item={item} />
        ))}
      </StyledList>
    </section>
  );
}

export default Favorites;
