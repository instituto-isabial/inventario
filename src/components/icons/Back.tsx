import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Back({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Back;
