import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import colors from "./colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    elevation: {
      ...DefaultTheme.colors.elevation,
      level2: colors.navbar.background,
    },
    onSurface: colors.navbar.textFocused,
    onSurfaceVariant: colors.navbar.textUnfocused,
    secondaryContainer: colors.navbar.backgroundFocused,
  },
};

export default theme;
