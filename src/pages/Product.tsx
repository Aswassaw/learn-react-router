import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <Fragment>
      <h1>Product</h1>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <Link to="product-1">Product 1</Link>
      <Link to="product-2">Product 2</Link>
      <Outlet />
    </Fragment>
  );
}
