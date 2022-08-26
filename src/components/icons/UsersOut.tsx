import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function UsersOut({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 20} height={size ?? 14} fill="none">
      <Path
        d="M7 7c1.93 0 3.5-1.57 3.5-3.5S8.93 0 7 0 3.5 1.57 3.5 3.5 5.07 7 7 7Zm0-5c.83 0 1.5.67 1.5 1.5S7.83 5 7 5s-1.5-.67-1.5-1.5S6.17 2 7 2Zm.05 10H2.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81C8.25 9.07 7.56 9 7 9c-2.34 0-7 1.17-7 3.5V14h7v-1.5c0-.17.02-.34.05-.5Zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V14h11v-1.5c0-1.99-3.66-3-5.5-3Zm1.21-1.82C16.47 7.25 17 6.44 17 5.5a2.5 2.5 0 0 0-5 0c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32.44 0 .85-.12 1.21-.32Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default UsersOut;
