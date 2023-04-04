import React, { useState } from "react";
import { IStacs } from "../../types/IStacs";
import stacValue from "./stacValue.json";

const Stacs = () => {
  const [stacList, setStacList] = useState<IStacs[]>(stacValue);
  return (
    <div>
      <div>dd</div>
    </div>
  );
};

export default Stacs;
