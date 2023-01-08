import TodayMenu from "./TodayMenu";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MainMenu.module.scss";
import {useState} from "react";

const MainMenu = props => {
  const dishes = props.selectedFoods;
  const dummy_selection = [];
  const [selectedDishes, setSelectedDishes] = useState(dummy_selection);
  console.log(selectedDishes);
  const selectDishes = function (selected) {
    if (!selectedDishes.includes(selected)) {
      console.log("double");
      setSelectedDishes(prevDishes => [selected, ...prevDishes]);
    }
  };
  const deselectDishes = function (selected) {
    if (selectedDishes.includes(selected)) {
      setSelectedDishes(prevDishes =>
        prevDishes.filter(dish => dish !== selected)
      );
    }
    console.log(selectedDishes);
  };
  return (
    <div className={styles.container}>
      <TodayMenu dishes={dishes} />
      <div className={styles.foodArea}>
        {dishes.map((dish, i) => (
          <MenuItem
            key={i}
            dish={dish}
            onSelect={selectDishes}
            onDeselect={deselectDishes}
          />
        ))}
      </div>
      {/* To be deleted */}
      <p>
        <b>Selected dishes:</b> {selectedDishes.join(", ")}
      </p>
    </div>
  );
};
export default MainMenu;
