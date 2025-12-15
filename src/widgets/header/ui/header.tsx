import { useState } from "react";
import { CONTENT_NAVIGATION_MENU } from "@shared/consts";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import Logo from "@shared/assets/logo.svg?react";
import MenuBurder from "@shared/assets/menu-burger.svg?react";
import MenuClose from "@shared/assets/menu-close.svg?react";

import "./header.scss"

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigationContent = CONTENT_NAVIGATION_MENU.map(item =>
    <li
      key={item.title}
    >
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          clsx("header__nav-list-item", isActive && "header__nav-active-link")
        }
      >
        {item.title}
      </NavLink>
    </li>
  )
  return (
    <header className={clsx(
      'header',
      isOpen && 'header__header-open'
    )}>
      <div className="header__logo-wrapper">
        <Logo className="header__logo"/>
        <span className="header__burger" onClick={() => setIsOpen(!isOpen)}>
          { isOpen ? <MenuClose/> : <MenuBurder /> }
        </span>
      </div>

      <nav className={clsx(
        'header__nav',
        isOpen && 'header__nav-open'
      )}>
        <ul className="header__nav-list">
          {navigationContent}
        </ul>
        <a href="tel:+78005553535" className="header__cta">+7 (800) 555-35-35</a>
      </nav>
    </header>
  )
}