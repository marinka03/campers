import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogFilterItem from "../../Components/CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "../../Components/CatalogFilterList/CatalogFilterList.styled";
import { allItems } from "../../redux/operations";

import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    items: state.catalog.favorites,
  };
}

function Favorites({ items }) {
  console.log(items);
  const [favorite, setFavorite] = useState(items);
  const isLoading = useSelector((state) => state.catalog.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allItems());
  }, [dispatch]);
  const updateFavorites = (id) => {
    setFavorite(favorite.filter((el) => el.id !== id));
  };

  return (
    <section style={{ marginTop: "100px" }}>
      {!isLoading && (
        <StyledList>
          {favorite?.map((item) => (
            <CatalogFilterItem
              key={item.id}
              parentId={item.id}
              item={item}
              onClickLike={updateFavorites}
            />
          ))}
        </StyledList>
      )}
    </section>
  );
}

export default connect(mapStateToProps)(Favorites);
