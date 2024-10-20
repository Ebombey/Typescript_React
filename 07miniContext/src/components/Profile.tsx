import { useUser } from "../context/UserContext";

function Profile() {
  const { user } = useUser();
  if (!user || !user.username) {
    return <div>Please Login</div>;
  }

  return <div>Welcome {user.username}</div>;
}

export default Profile;
