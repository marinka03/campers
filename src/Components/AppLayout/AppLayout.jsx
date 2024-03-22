import React, { Suspense, useEffect } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { useDispatch } from "react-redux";
import { AllItems, currentItems } from "../../redux/operations";

function AppLayout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentItems())
    dispatch(AllItems())
  }, [dispatch]);
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
