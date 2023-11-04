import { Fragment } from "react";

const HeavyComponent = () => {
  // Buat array besar dengan 10.000 elemen
  const bigArray = Array.from({ length: 100000 }, (_, index) => index);

  return (
    <Fragment>
      <h1>Komponen Berat</h1>
      <ul>
        {bigArray.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default HeavyComponent;
