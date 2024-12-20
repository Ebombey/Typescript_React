import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { AppDispatch } from "../../store/store";

function LogoutBtn() {
  const dispatch = useDispatch<AppDispatch>();
  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <>
      <div className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
        Logout
      </div>
    </>
  );
}

export default LogoutBtn;
