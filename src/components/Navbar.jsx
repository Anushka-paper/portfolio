import { useRef, useState } from "react";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import useThemeStore from "#store/theme";
import usePopoverOutsideClose from "#hooks/usePopover";
import { Clock, WifiPopover, UserPopover, SearchPopover } from "#components";

const iconById = (id) => navIcons.find((icon) => icon.id === id)?.img;

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { theme, toggleTheme } = useThemeStore();

  const wifiRef = useRef(null);
  const [wifiOpen, setWifiOpen] = useState(false);
  usePopoverOutsideClose(wifiRef, wifiOpen, () => setWifiOpen(false));

  const searchRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  usePopoverOutsideClose(searchRef, searchOpen, () => setSearchOpen(false));

  const userRef = useRef(null);
  const [userOpen, setUserOpen] = useState(false);
  usePopoverOutsideClose(userRef, userOpen, () => setUserOpen(false));

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Anushka's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <button type="button" onClick={() => openWindow(type)}>
                {name}
              </button>
            </li>
          ))}{" "}
        </ul>
      </div>
      <div>
        <ul>
          <li ref={wifiRef} className="nav-icon-wrap">
            <button
              type="button"
              className="icon-hover"
              aria-expanded={wifiOpen}
              onClick={() => setWifiOpen((prev) => !prev)}
            >
              <img src={iconById(1)} alt="Wi-Fi" className="dark:invert" />
            </button>
            {wifiOpen && <WifiPopover />}
          </li>

          <li ref={searchRef} className="nav-icon-wrap">
            <button
              type="button"
              className="icon-hover"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <img src={iconById(2)} alt="Search" className="dark:invert" />
            </button>
            {searchOpen && <SearchPopover />}
          </li>

          <li ref={userRef} className="nav-icon-wrap">
            <button
              type="button"
              className="icon-hover"
              aria-expanded={userOpen}
              onClick={() => setUserOpen((prev) => !prev)}
            >
              <img src={iconById(3)} alt="Profile" className="dark:invert" />
            </button>
            {userOpen && <UserPopover />}
          </li>

          <li className="nav-icon-wrap">
            <button
              type="button"
              className={`icon-hover ${theme === "dark" ? "nav-icon--active" : ""}`}
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              <img src={iconById(4)} alt="Toggle theme" className="dark:invert" />
            </button>
          </li>
        </ul>

        <Clock />
      </div>
    </nav>
  );
};

export default Navbar;
