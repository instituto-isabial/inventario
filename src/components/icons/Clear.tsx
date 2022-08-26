import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Clear({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Clear;
