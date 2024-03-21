import CatalogFilterList from "../../Components/CatalogFilterList/CatalogFilterList";
import {
  StyledSideBar,
  FilterLocation,
  LocationInput,
  StyledContentWrap,
} from "./CatalogPage.styled";

function CatalogPage() {

  return (
    <>
      <StyledContentWrap>
        <StyledSideBar>
          <FilterLocation>
            <label htmlFor="sidebarLocation">Location</label>
            <LocationInput type="text" id="sidebarLocation" />
          </FilterLocation>
        </StyledSideBar>

        <CatalogFilterList />
      </StyledContentWrap>
    </>
  );
}

export default CatalogPage;
