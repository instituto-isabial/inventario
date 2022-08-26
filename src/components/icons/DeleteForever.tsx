import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function DeleteForever({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12Zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12ZM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default DeleteForever;
