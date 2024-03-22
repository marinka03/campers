import CatalogFilterList from "../../Components/CatalogFilterList/CatalogFilterList";
// import Geosuggest from "@ubilabs/react-geosuggest";
import {
  StyledSideBar,
  FilterLocation,
  // LocationInput,
  FilterWrapCategory,
  StyledContentWrap,
  FilterTitleCategory,
  EquipmentList,
  EquipmentItem,
} from "./CatalogPage.styled";
import Button from "../../Components/Button";
import sprite from '../../assets/icons/icons-sprite.svg'

function CatalogPage() {
  return (
    <>
      <StyledContentWrap>
        <StyledSideBar>
          <FilterLocation>
            {/* <label htmlFor="sidebarLocation">Location</label> */}
            {/* <LocationInput type="text" id="sidebarLocation" placeholder="City"/> */}

            {/* <Geosuggest placeholder="City" country="Ukraine" /> */}

            <div>
              <span>Filters</span>
              <FilterWrapCategory>
                <div>
                  <FilterTitleCategory>Vehicle equipment</FilterTitleCategory>
                  <EquipmentList>
                    <EquipmentItem> 
                      <svg>
                      <use href={`${sprite}#ac`} />
                      </svg>
                      <span>AC</span>
                    </EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                  </EquipmentList>
                </div>

                <div style={{ murginBottom: "32px" }}>
                  <FilterTitleCategory>Vehicle type</FilterTitleCategory>
                  <EquipmentList>
                    <EquipmentItem>TV</EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                    <EquipmentItem>TV</EquipmentItem>
                  </EquipmentList>
                </div>
                <Button text="Search" />
              </FilterWrapCategory>
            </div>
          </FilterLocation>
        </StyledSideBar>

        <CatalogFilterList />
      </StyledContentWrap>
    </>
  );
}

export default CatalogPage;
