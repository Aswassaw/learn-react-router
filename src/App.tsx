import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
import OrderSummary from "./pages/OrderSummary";
import Product from "./pages/Product";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import TestLaxyLoading from "./pages/TestLaxyLoading";

const LazyAbout = lazy(() => import("./pages/About"));

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback="Loading...">
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="lazy" element={<TestLaxyLoading />} />
          <Route path="products" element={<Product />}>
            <Route index element={<Product1 />} />
            <Route path="product-1" element={<Product1 />} />
            <Route path="product-2" element={<Product2 />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
