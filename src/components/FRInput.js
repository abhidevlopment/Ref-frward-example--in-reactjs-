import React, { Component } from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="ext" ref={ref} />
    </div>
  );
});
export default FRInput;
