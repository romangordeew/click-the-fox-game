import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <Provider store={store}>
        <Router />
      </Provider>
    </Layout>
  </React.StrictMode>
);
