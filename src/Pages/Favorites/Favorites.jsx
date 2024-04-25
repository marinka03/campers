import { useSelector } from "react-redux";
import CatalogFilterItem from "../../components/CatalogFilterItem";
import { selectorFavoriteItems } from "../../redux/selectors";
import Footer from "../../components/Footer";
import { StyledList } from "../../components/CatalogFilterList/CatalogFilterList.styled";

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
