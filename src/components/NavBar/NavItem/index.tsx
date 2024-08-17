import { type ReactElement } from 'react';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

import styles from './NavItem.module.scss';

type NavItemProps = {
  path: string;
  label: string;
};

export const NavItem = (props: NavItemProps): ReactElement => {
  const { path, label } = props;

  const getLinkStyles = ({ isActive }: NavLinkRenderProps) => {
    return `${styles.link} ${isActive ? styles.activeLink : styles.baseLink}`;
  };

  return (
    <li>
      <NavLink className={getLinkStyles} to={path}>
        {label}
      </NavLink>
    </li>
  );
};
