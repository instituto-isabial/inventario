import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function MaterialsFill({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 22} height={size ?? 16} fill="none">
      <Path
        d="M2 2h18V0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h4v-2H2V2Zm10 6H8v1.78c-.61.55-1 1.33-1 2.22 0 .89.39 1.67 1 2.22V16h4v-1.78c.61-.55 1-1.34 1-2.22 0-.88-.39-1.67-1-2.22V8Zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM21 4h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1Zm-1 10h-4V6h4v8Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default MaterialsFill;
