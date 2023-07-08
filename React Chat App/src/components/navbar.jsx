import { UserAuth } from "../context/auth_context";
import SideMenu from "./side_menu";

const Navbar = (props) => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed bg-base-200 z-10">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={props.toggleDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Farouq's Chat</a>
      </div>
      <div className="flex-none">
        {currentUser ? (
          <>
            <SideMenu />
            <a onClick={handleLogout} className="btn current-theme-color">Logout</a>
          </>
        ) : ""}
      </div>
    </div>
  );
}

export default Navbar;
