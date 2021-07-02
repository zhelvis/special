/** @jsx jsx */
import { jsx, IconButton, useColorMode } from "theme-ui";
import { ThemeIcon } from "./icons";

const ThemeButton = () => {
  const [colorMode, setColorMode] = useColorMode();

  const colorToggleMap = {
    light: "dark",
    dark: "alt",
    alt: "alt_dark",
    alt_dark: "light",
  };

  const toggleColorMode = () => {
    setColorMode(colorToggleMap[colorMode]);
  };

  return (
    <IconButton aria-label="Switch theme" onClick={toggleColorMode}>
      <ThemeIcon sx={{ fill: "text" }} />
    </IconButton>
  );
};

export default ThemeButton;
