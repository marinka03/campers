import React, { Suspense } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";

function AppLayout() {
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
