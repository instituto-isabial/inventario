import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Grid({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 18} height={size ?? 18} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0v8h8V0H0Zm6 6H2V2h4v4Zm-6 4v8h8v-8H0Zm6 6H2v-4h4v4Zm4-16v8h8V0h-8Zm6 6h-4V2h4v4Zm-6 4v8h8v-8h-8Zm6 6h-4v-4h4v4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Grid;
