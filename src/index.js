import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StyledEngineProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <BrowserRouter basename="/campers">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StyledEngineProvider>

  // </React.StrictMode>
);

reportWebVitals();
