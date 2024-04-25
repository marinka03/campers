import { useSelector } from "react-redux";
import CatalogFilterItem from "../../Components/CatalogFilterItem";
import { StyledList } from "../../Components/CatalogFilterList/CatalogFilterList.styled";
import { selectorFavoriteItems } from "../../redux/selectors";
import Footer from "../../Components/Footer";

function Favorites() {
  const fav = useSelector(selectorFavoriteItems);

  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <StyledList>
          {fav?.map((item) => (
            <CatalogFilterItem key={item.id} parentId={item.id} item={item} />
          ))}
        </StyledList>
      </section>
      
      <Footer />
    </>
  );
}

export default Favorites;
