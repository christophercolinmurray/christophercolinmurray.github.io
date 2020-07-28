import * as React from "react";

function SvgCm(props) {
  return (
    <svg baseProfile="tiny" viewBox="0 0 512 512" overflow="visible" {...props}>
      <path fill="#231F20" d="M.3-.3h512v512H.3z" />
      <text
        transform="translate(74.186 471.606)"
        fill="#FFF"
        fontFamily="'AvenirNext-DemiBold'"
        fontSize={326.537}
      >
        {"cm"}
      </text>
    </svg>
  );
}

export default SvgCm;
