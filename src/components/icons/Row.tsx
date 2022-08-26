import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Row({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M22 2H2v20h20V2ZM4 8V4h16v4H4Zm0 6v-4h16v4H4Zm0 6v-4h16v4H4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Row;
