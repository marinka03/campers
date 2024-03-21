import CatalogFilterList from "../../Components/CatalogFilterList/CatalogFilterList";
import Geosuggest from '@ubilabs/react-geosuggest';
import {
  StyledSideBar,
  FilterLocation,
  // LocationInput,
  StyledContentWrap,
} from "./CatalogPage.styled";

function CatalogPage() {

  return (
    <>
      <StyledContentWrap>

        <StyledSideBar>
          <FilterLocation>
            {/* <label htmlFor="sidebarLocation">Location</label> */}
            {/* <LocationInput type="text" id="sidebarLocation" placeholder="City"/> */}
            
            <Geosuggest placeholder='City' country='Ukraine'/>
          </FilterLocation>
        </StyledSideBar>

        <CatalogFilterList />
      </StyledContentWrap>
    </>
  );
}

export default CatalogPage;
