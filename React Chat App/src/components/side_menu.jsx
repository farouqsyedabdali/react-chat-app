import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SideMenu = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDrawerClose = () => {
    props.toggleDrawer();
  };

  const handleThemeChange = (newTheme) => {
    props.setTheme(newTheme);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', props.theme); 
  }, [props.theme]);

  return (
    <div className="drawer z-10">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={props.isDrawerOpen}
        readOnly
      />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content relative sidebar-menu-items">
          {/* Sidebar content here */}
          <div className="menu p-4 w-70 h-full bg-base-200 text-base-content sidebar-menu-items">
            <div className="dropdown dropdown-hover">
              <button tabIndex={0} className="btn m-1 current-theme-color-primary" onClick={handleDropdownToggle}>
                Themes
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('dark')}>
                    Dark
                  </button>
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('light')}>
                    Light
                  </button>
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('synthwave')}>
                    Synthwave
                  </button>
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('cupcake')}>
                    Cupcake
                  </button>
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('dracula')}>
                    Dracula
                  </button>
                  <button className="btn btn-active current-theme-color-primary mb-2" onClick={() => handleThemeChange('aqua')}>
                    Aqua
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="absolute top-0 right-0 m-4">
            <button className="btn btn-square btn-outline" onClick={handleDrawerClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default SideMenu;
