import styles from "./MenuItem.module.scss";
import {useState} from "react";

const MenuItem = function (props) {
  const [selected, setSelected] = useState(false);
  const {name, ingredients, instructions, long_instructions, src, key} =
    props.dish;
  const allIngredients = ingredients.flatMap(
    ingredient => ingredient.qty + " " + ingredient.ingredient
  );
  const handleSelect = e => {
    if (selected === false) {
      // console.log("select");
      e.target.closest("main").style.border = "orange 1px solid";
      e.target.style.backgroundColor = "orange";
      e.target.innerText = "✓";
      setSelected(true);
      // console.log(e.target.value);
      props.onSelect(e.target.value);
    }
    if (selected === true) {
      // console.log("deselect");
      e.target.closest("main").style.border = "none";
      e.target.style.backgroundColor = "inherit";
      e.target.innerText = ">>";
      setSelected(false);
      props.onDeselect(e.target.value);
    }
  };
  return (
    <main key={key} className={styles.mainContainer} value={name}>
      <details>
        <summary>
          <div className={styles.container}>
            <h3>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                title="Walder Wellness"
              >
                {name}
              </a>
            </h3>
            <p>{instructions}</p>
            <div>
              <p>
                <span className={styles.subtitle}>Ingredients: </span>
                {allIngredients.join(", ")}
              </p>
            </div>
          </div>
        </summary>

        <ul>
          <h3>Instructions:</h3>
          {long_instructions.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
        <p className={styles.link}>
          Link to recipe:
          <a href={src}> {src}</a>
        </p>
      </details>
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
