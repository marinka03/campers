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
import { useDispatch, useSelector } from "react-redux";
import { changeFilterItems } from "../../redux/filterSlice/filterSlice";
import { selectorFilter } from "../../redux/filterSlice/selectors";
import { selectorAllItems } from "../../redux/selectors";
import { setFilteredItems } from "../../redux/catalogSlice";

function CatalogPage() {
  const filters = useSelector(selectorFilter)
  const allItems = useSelector(selectorAllItems)
  
  const res = allItems?.filter((item) => {
    if((!filters.location || item.location === filters.location)&&
      (!filters['vehicle'] || item.form === filters.vehicle)&&
      (!filters['AC'] || item.details["airConditioner"] > 0)&&
      (!filters['Automatic'] || item.transmission === 'automatic')&&
      (!filters['Kitchen'] || item.details['kitchen'] > 0)&&
      (!filters['TV'] || item.details["TV"] > 0)&&
      (!filters['Shower/WC'] || item.details["shower"] > 0)
      ){
      return item
    }
    return false;
  })
  
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    dispatch(changeFilterItems(e.target.textContent))
  }
  const handleBlur = (e)=>{
    dispatch(changeFilterItems(e.target.value))
  }
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
              <AutoCompleteCity onBlur={handleBlur}/>
            </div>

            <div>
              <span>Filters</span>
              <FilterWrapCategory>
                <div>
                  <FilterTitleCategory>Vehicle equipment</FilterTitleCategory>

                  <EquipmentList>
                    <EquipmentItem onClick={handleClick} className={filters.AC? 'activeFilter' : ''}>
                      <MdAir size={32} />
                      <span>AC</span>
                    </EquipmentItem>

                    <EquipmentItem  onClick={handleClick} className={filters.Automatic? 'activeFilter' : ''}>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#automatic`} />
                      </svg>
                      <span>Automatic</span>
                    </EquipmentItem>

                    <EquipmentItem  onClick={handleClick} className={filters.Kitchen? 'activeFilter' : ''}>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#kitchen-big`} />
                      </svg>
                      <span>Kitchen</span>
                    </EquipmentItem>

                    <EquipmentItem  onClick={handleClick} className={filters.TV? 'activeFilter' : ''}>
                      <svg width={32} height={32}>
                        <use href={`${sprite}#tv`} />
                      </svg>
                      <span>TV</span>
                    </EquipmentItem>

                    <EquipmentItem  onClick={handleClick} className={filters['Shower/WC']? 'activeFilter' : ''}>
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
                    <EquipmentItem onClick={handleClick} className={filters.vehicle === 'Van'? 'activeFilter' : ''}>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#van`} />
                      </svg>
                      <span>Van</span>
                    </EquipmentItem>
                    <EquipmentItem onClick={handleClick} className={filters.vehicle === 'Fully Integrated'? 'activeFilter' : ''}>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#fully-integrated`} />
                      </svg>
                      <span>Fully Integrated</span>
                    </EquipmentItem>
                    <EquipmentItem onClick={handleClick} className={filters.vehicle === 'Alcove'? 'activeFilter' : ''}>
                      <svg width={40} height={28}>
                        <use href={`${sprite}#alcove`} />
                      </svg>
                      <span>Alcove</span>
                    </EquipmentItem>
                  </EquipmentList>
                </div>
                <Button text="Search" onClick={()=>dispatch(setFilteredItems(res))}/>
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
