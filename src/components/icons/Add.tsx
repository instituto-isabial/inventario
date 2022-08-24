import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Add({ size, color }: IconProps) {
  return (
    <Svg width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M24 13.714H13.714V24h-3.428V13.714H0v-3.428h10.286V0h3.428v10.286H24v3.428Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Add;
