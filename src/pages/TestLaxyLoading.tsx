import { Fragment, lazy, Suspense, useState } from "react";
import Human1 from "./Human1";
// import HeavyComponent from "./Heavy";
const Human2 = lazy(() => import("./Human2"));
const Human3 = lazy(() => import("./Human3"));
const Heavy = lazy(() => import("./Heavy"));

export default function TestLaxyLoading() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  const handleClick = () => {
    setShowHeavyComponent(true);
  };

  return (
    <Fragment>
      <h1>Lazy Loading</h1>
      <Human1 />
      <Suspense fallback="Loading... Human">
        <Human2 />
        <Human3 />
      </Suspense>
      <button onClick={handleClick}>Muat Komponen Berat</button>
      {showHeavyComponent && (
        <Suspense fallback="Loading... Heavy Coy">
          <Heavy />
        </Suspense>
      )}
      {/* {showHeavyComponent && <HeavyComponent />} */}
    </Fragment>
  );
}
