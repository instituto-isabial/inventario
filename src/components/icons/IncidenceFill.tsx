import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function IncidenceFill({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 20} height={size ?? 22} fill="none">
      <Path
        d="m19.67 17.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41Z"
        fill={color ?? "#001F24"}
      />
      <Path
        d="m15.34 9.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V4.06L2.83 1.04 0 3.87 3.03 6.9h1.41l4.13 4.13-.85.85H5.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default IncidenceFill;
