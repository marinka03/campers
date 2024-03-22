import CatalogFilterList from "../../Components/CatalogFilterList/CatalogFilterList";
import { OpenStreetMapAutocomplete } from "@amraneze/osm-autocomplete";
import { MdAir } from "react-icons/md";
import {
  StyledSideBar,
  FilterLocation,
  FilterWrapCategory,
  StyledContentWrap,
  FilterTitleCategory,
  EquipmentList,
  EquipmentItem,
} from "./CatalogPage.styled";
import Button from "../../Components/Button";
import sprite from "../../assets/icons/icons-sprite.svg";

function CatalogPage() {
  const handleChange = (e) => {
    console.dir(e);
    console.dir(e.display_name);
  };
  return (
    <>
      <StyledContentWrap>
        <StyledSideBar>
          <FilterLocation>
            <div style={{ marginBottom: "10px" }}>
              <OpenStreetMapAutocomplete
                value={null}
                onChange={handleChange}
                placeholder="City"
              />
            </div>

            <div>
              <span>Filters</span>
              <FilterWrapCategory>
                <div>
                  <FilterTitleCategory>Vehicle equipment</FilterTitleCategory>
                  <EquipmentList>
                    <EquipmentItem>
                      <MdAir size={32} />
                      <span>AC</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#automatic`} />
                      </svg>
                      <span>Automatic</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#kitchen-big`} />
                      </svg>
                      <span>Kitchen</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#tv`} />
                      </svg>
                      <span>TV</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#shower`} />
                      </svg>
                      <span>Shower/WC</span>
                    </EquipmentItem>
                  </EquipmentList>
                </div>

                <div style={{ murginBottom: "32px" }}>
                  <FilterTitleCategory>Vehicle type</FilterTitleCategory>
                  <EquipmentList>
                    <EquipmentItem>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#van`} />
                      </svg>
                      <span>Van</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#fully-integrated`} />
                      </svg>
                      <span>Fully Integrated</span>
                    </EquipmentItem>
                    <EquipmentItem>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#alcove`} />
                      </svg>
                      <span>Alcove</span>
                    </EquipmentItem>
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
