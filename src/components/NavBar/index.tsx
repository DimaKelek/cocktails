import { type ReactElement } from 'react';

import { Paths } from '@app/navigation/types';

import logo from '../../shared/assets/logo.png';
import styles from './NavBar.module.scss';
import { NavItem } from './NavItem';

const navigationConfig = [
  { path: Paths.Margarita, label: 'Margarita' },
  { path: Paths.Mojito, label: 'Mojito' },
  { path: Paths.A1, label: 'A1' },
  { path: Paths.Kir, label: 'Kir' },
];

export const NavBar = (): ReactElement => {
  return (
    <div className={styles.container}>
      <img src={logo} alt={'logo'} className={styles.logo} />
      <nav className={styles.navigation}>
        <ul>
          {navigationConfig.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
