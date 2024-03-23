import { useSelector } from "react-redux";
import CatalogFilterItem from "../../Components/CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "../../Components/CatalogFilterList/CatalogFilterList.styled";
import { selectorFavoriteItems } from "../../redux/selectors";

function Favorites() {
  const fav = useSelector(selectorFavoriteItems)

  return (
    <section style={{ marginTop: "100px" }}>
        <StyledList>
          {fav?.map((item) => (
            <CatalogFilterItem
              key={item.id}
              parentId={item.id}
              item={item}
            />
          ))}
        </StyledList>
    </section>
  );
}

export default Favorites;
