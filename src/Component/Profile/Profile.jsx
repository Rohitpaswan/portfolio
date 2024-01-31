import { Typography } from "@mui/material";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile__name">
        <Typography className="name">Rohit</Typography>
        <Typography className="role">Web Developer</Typography>
      </div>
      <figure>
        <img src="../Image/profile.jpg" alt="profile_Img" className="profileImg"/>
      </figure>
      <div className="profile__info"></div>
    </div>
  );
};

export default Profile;
