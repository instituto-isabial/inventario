import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Delete({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 16} height={size ?? 21} fill="none">
      <Path
        d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Delete;
