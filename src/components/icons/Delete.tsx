import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Delete({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 14} height={size ?? 18} fill="none">
      <Path
        d="M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12Zm2.46-7.12 1.41-1.41L7 9.59l2.12-2.12 1.41 1.41L8.41 11l2.12 2.12-1.41 1.41L7 12.41l-2.12 2.12-1.41-1.41L5.59 11 3.46 8.88ZM10.5 1l-1-1h-5l-1 1H0v2h14V1h-3.5Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Delete;
