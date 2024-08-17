import { type ReactElement } from 'react';

import { CocktailCodes } from '@api';

import logo from '../../shared/assets/logo.png';
import styles from './NavBar.module.scss';
import { NavItem } from './NavItem';

const navigationConfig = [
  { path: `cocktails/${CocktailCodes.Margarita}`, label: 'Margarita' },
  { path: `cocktails/${CocktailCodes.Mojito}`, label: 'Mojito' },
  { path: `cocktails/${CocktailCodes.A1}`, label: 'A1' },
  { path: `cocktails/${CocktailCodes.Kir}`, label: 'Kir' },
];

export const NavBar = (): ReactElement => {
  return (
    <div className={styles.container}>
      <img src={logo} alt={'logo'} className={styles.logo} />
      <nav className={styles.navigation}>
        <ul>
          {navigationConfig.map((link) => (
            <NavItem key={link.label} path={link.path} label={link.label} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
