import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
export default function Navbar() {
  const handClick = () => {
    window.location.reload();
  };
  const { isAuth } = useContext(Context);
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <p>User Logged In : {isAuth.token ? <>Yes </>: <>No</>}</p>
      {isAuth.token ? (
        <button onClick={handClick}>Logout</button>
      ) : (
        <button disabled="true">Logout</button>
      )}
    </div>
  );
}
