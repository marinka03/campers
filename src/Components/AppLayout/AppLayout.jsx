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
        <main style={{
          width: '100vw',
          height: '100vh',
        }}>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </Suspense>
    </>
  );
}

export default AppLayout;
