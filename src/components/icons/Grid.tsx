import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Grid({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3v8h8V3H3Zm6 6H5V5h4v4Zm-6 4v8h8v-8H3Zm6 6H5v-4h4v4Zm4-16v8h8V3h-8Zm6 6h-4V5h4v4Zm-6 4v8h8v-8h-8Zm6 6h-4v-4h4v4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Grid;
