import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Add({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill={color ?? "#001F24"} />
    </Svg>
  );
}

export default Add;
