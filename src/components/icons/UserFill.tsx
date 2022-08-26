import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function UserFill({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 24} height={size ?? 24} fill="none">
      <Path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default UserFill;
