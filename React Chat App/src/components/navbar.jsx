import { UserAuth } from "../context/auth_context"

const navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-base-300">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">FarouqChat</a>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default navbar