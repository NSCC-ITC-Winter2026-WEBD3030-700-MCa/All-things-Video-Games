import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import IconMoon from '@theme/Icon/Moon';
import IconSun from '@theme/Icon/Sun';

export default function DarkModeToggle() {
  const { colorMode, toggle } = useColorMode();

  return (
    <button
      type="button"
      className="clean-btn dark-navbar-toggle"
      onClick={toggle}
      aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {colorMode === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
}
