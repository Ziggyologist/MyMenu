import styles from "./MenuItem.module.scss";
import {useState} from "react";

const MenuItem = function (props) {
  const [selected, setSelected] = useState(false);
  const {name, ingredients, instructions, key} = props.dish;
  const handleSelect = e => {
    if (selected === false) {
      console.log("select");
      e.target.closest("main").style.border = "orange 1px solid";
      e.target.style.backgroundColor = "orange";
      e.target.innerText = "✓";
      setSelected(true);
      console.log(e.target.value);
      props.onSelect(e.target.value);
    }
    if (selected === true) {
      console.log("deselect");
      e.target.closest("main").style.border = "none";
      e.target.style.backgroundColor = "inherit";
      e.target.innerText = ">>";
      setSelected(false);
      props.onDeselect(e.target.value);
    }
  };
  return (
    <main key={key} className={styles.mainContainer} value={name}>
      <div className={styles.container}>
        <h3>{name}</h3>
        <p>{instructions}</p>
        <div>
          <p>
            <span className={styles.subtitle}>Ingredients: </span>
            {ingredients.join(", ")}
          </p>
        </div>
      </div>
      <button
        className={styles.sideBtn}
        title="add item"
        value={name}
        onClick={handleSelect}
      >
        {">>"}
      </button>
    </main>
  );
};
export default MenuItem;
