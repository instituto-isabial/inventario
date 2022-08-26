import React from "react";
import Svg, { Path } from "react-native-svg";

import type { IconProps } from "./types";

function Clear({ size, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size ?? 20} height={size ?? 20} fill="none">
      <Path
        d="M12.59 6 10 8.59 7.41 6 6 7.41 8.59 10 6 12.59 7.41 14 10 11.41 12.59 14 14 12.59 11.41 10 14 7.41 12.59 6ZM10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
        fill={color ?? "#001F24"}
      />
    </Svg>
  );
}

export default Clear;
