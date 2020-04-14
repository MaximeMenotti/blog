import * as React from 'react';

export type NavigationBarProps = {
  colors: any,
};

function NavigationBar({ colors }: NavigationBarProps) {
  return (
    <nav className="main-navigation-bar" style={{ color: 'white' }}>
      <ul>
        <li>Instagram</li>
      </ul>
      <ul className="right" style={{ color: colors.vibrant }}>
        <li><a href="/">Lille</a></li>
        <li><a href="/">Bali</a></li>
        <li><a href="/">Valparaiso</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
