import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Search({ size, color }: IconProps) {
  return (
    <Svg width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M17.153 15.094h-1.084l-.385-.37a8.88 8.88 0 0 0 2.155-5.805A8.92 8.92 0 0 0 8.919 0 8.92 8.92 0 0 0 0 8.92a8.92 8.92 0 0 0 8.92 8.919c2.209 0 4.24-.81 5.804-2.155l.37.385v1.084L21.955 24 24 21.955l-6.847-6.86Zm-8.234 0A6.167 6.167 0 0 1 2.744 8.92 6.167 6.167 0 0 1 8.92 2.744a6.167 6.167 0 0 1 6.175 6.175 6.167 6.167 0 0 1-6.175 6.175Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Search;
