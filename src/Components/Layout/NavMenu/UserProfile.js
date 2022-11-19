import styles from "./UserProfile.module.scss";
// import img from "../../../Photos/profilePhoto.PNG";
import img from "../../../Photos/pp2.jpg";

const UserProfile = props => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="user profile" />
      </div>
      <div>Hello, {props.userName}</div>
    </div>
  );
};
export default UserProfile;
