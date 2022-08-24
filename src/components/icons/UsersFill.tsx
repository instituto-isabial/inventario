import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function UsersFill({ size, color }: IconProps) {
  return (
    <Svg width={size ?? 20} height={size ?? 14} fill="none">
      <Path
        d="M14.5 7c1.38 0 2.49-1.12 2.49-2.5S15.88 2 14.5 2a2.5 2.5 0 0 0 0 5ZM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3Zm7.5 3C12.67 9 9 9.92 9 11.75V14h11v-2.25C20 9.92 16.33 9 14.5 9ZM7 8c-2.33 0-7 1.17-7 3.5V14h7v-2.25c0-.85.33-2.34 2.37-3.47C8.5 8.1 7.66 8 7 8Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default UsersFill;
