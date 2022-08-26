import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Delete({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Delete;
