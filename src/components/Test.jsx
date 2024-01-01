import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  const param = useParams();

  return (
    <div>
      <h1> {param.test}</h1>
      it s out test file
    </div>
  );
}

export default Test;
