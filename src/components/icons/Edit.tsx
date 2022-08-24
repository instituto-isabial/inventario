import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Edit({ size, color }: IconProps) {
  return (
    <Svg width={size ?? 19} height={size ?? 19} fill="none">
      <Path
        d="M0 14.252v3.75h3.75l11.06-11.06-3.75-3.75L0 14.253Zm17.71-10.21a.996.996 0 0 0 0-1.41L15.37.292a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Edit;
