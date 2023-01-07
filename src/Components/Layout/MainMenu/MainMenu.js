import TodayMenu from "./TodayMenu";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MainMenu.module.scss";

const MainMenu = props => {
  const dishes = props.selectedFoods;
  return (
    <div className={styles.container}>
      <TodayMenu dishes={dishes} />
      <div className={styles.foodArea}>
        {dishes.map((dish, i) => (
          <MenuItem key={i} props={dish} />
        ))}
      </div>
    </div>
  );
};
export default MainMenu;
