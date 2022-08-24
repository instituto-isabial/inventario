import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function UserOut({ size, color }: IconProps) {
  return (
    <Svg width={size ?? 16} height={size ?? 16} fill="none">
      <Path
        d="M8 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 10c2.7 0 5.8 1.29 6 2H2c.23-.72 3.31-2 6-2ZM8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default UserOut;
