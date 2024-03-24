import CatalogFilterList from "../../Components/CatalogFilterList/CatalogFilterList";
import { MdAir } from "react-icons/md";
import {
  StyledSideBar,
  FilterLocation,
  LocationText,
  FilterWrapCategory,
  StyledContentWrap,
  FilterTitleCategory,
  EquipmentList,
  EquipmentItem,
} from "./CatalogPage.styled";
import Button from "../../Components/Button";
import sprite from "../../assets/icons/icons-sprite.svg";
import AutoCompleteCity from "../../Components/AutoCompleteCity";
import { IoLocationOutline } from "react-icons/io5";

function CatalogPage() {
  return (
    <>
      <StyledContentWrap>
        <StyledSideBar>
          <FilterLocation style={{ position: "relative" }}>
            <IoLocationOutline
              style={{
                position: "absolute",
                zIndex: 20,
                top: "42px",
                left: "18px",
              }}
              size={20}
            />
            <div style={{ marginBottom: "32px" }}>
              <LocationText>Location</LocationText>
              <AutoCompleteCity />
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
