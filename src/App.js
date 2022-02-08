import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import "./App.scss";
import Layout from "./components/Layout";
import Category from "./pages/Category/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import { ROUTES } from "./services/routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path={ROUTES.HOME_PAGE} element={<Home />} />
          <Route path={ROUTES.CATEGORY_PARAM} element={<Category />} />
          <Route path={ROUTES.PRODUCT_PARAM} element={<Product />} />
          <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
          <Route
            path="*"
            element={<Navigate to={ROUTES.HOME_PAGE} replace />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
