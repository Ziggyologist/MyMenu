import styles from "./MenuNav.module.scss";
import UserProfile from "./UserProfile";
import {
  Speedometer2,
  EggFried,
  Person,
  ClockHistory,
} from "react-bootstrap-icons";

const MenuNav = props => {
  return (
    <div className={styles.main_container}>
      <UserProfile userName={props.userName} />

      <ul className={styles.list}>
        <li>
          <Speedometer2 className={styles.icons} />
          <a href="#">Dashboard</a>
        </li>
        <li>
          <EggFried className={styles.icons} />
          <a href="#">Meals</a>
        </li>
        <li>
          {" "}
          <ClockHistory className={styles.icons} />
          <a href="#">Meal History</a>
        </li>
        <li>
          <Person className={styles.icons} />
          <a href="#">User Account</a>
        </li>
      </ul>
    </div>
  );
};
export default MenuNav;
