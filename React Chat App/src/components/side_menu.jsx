import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = (props) => {
  const handleDrawerClose = () => {
    props.toggleDrawer(); // Call the toggleDrawer function from props
  };

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
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content relative sidebar-menu-items"> {/* Add padding-right */}
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
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
};

export default SideMenu;
