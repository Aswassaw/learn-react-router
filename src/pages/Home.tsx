import { Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("filter"));

  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={() => navigate("/order-summary", { replace: true })}>
        Place Order
      </button>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Test Params 1
      </button>
      <button onClick={() => setSearchParams({})}>Test Params 1</button>
    </Fragment>
  );
}
