import React, { Suspense, useEffect } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { currentItems } from "../../redux/operations";
import { selectorCatalogItems } from "../../redux/selectors";

function AppLayout() {
  const currentPage = useSelector((state) => state.catalog.page);
  const items = useSelector(selectorCatalogItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(currentItems({ page: currentPage }));
    }
  }, [dispatch, currentPage, items.length]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </Suspense>
    </>
  );
}

export default AppLayout;
