import { v4 as uuid } from "uuid";
import CatalogFilterItem from "../CatalogFilterItem/CatalogFilterItem";
import { StyledList } from "./CatalogFilterList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectorCatalogItems } from "../../redux/selectors";
import { currentItems } from "../../redux/operations";
import BtnWhite from "../BtnWhite";
import { useEffect, useState } from "react";

function CatalogFilterList() {
  const CAMPERS_LIST = useSelector(selectorCatalogItems);
  const disabledItem = useSelector(state => state.catalog.disable)
  const currentPage = useSelector((state) => state.catalog.page);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (currentPage === 0) {
      dispatch(currentItems({ page: currentPage + 1 }));
      setCount(1);
      console.log(count)
    }
  }, [currentPage, dispatch, count]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledList>
          {CAMPERS_LIST?.length > 0 &&
            CAMPERS_LIST.map((item) => (
              <CatalogFilterItem key={uuid()} parentId={item.id} item={item} />
            ))}
        </StyledList>
        {!disabledItem && CAMPERS_LIST?.length > 0 &&<BtnWhite
          text="Load more"
          onClick={() => {
            dispatch(currentItems({ page: currentPage + 1 }));
          }}
        />}
      </div>
    </>
  );
}

export default CatalogFilterList;
