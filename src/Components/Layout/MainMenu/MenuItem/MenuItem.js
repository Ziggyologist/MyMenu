import styles from "./MenuItem.module.scss";

const MenuItem = function (props) {
  const {name, ingredients, instructions, key} = props.props;
  return (
    <div key={key} className={styles.mainContainer}>
      <div className={styles.container}>
        <h3>{name}</h3>
        <p>{instructions}</p>
        <div>
          <ul>
            <span className={styles.subtitle}>Ingredients:</span>
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.sideBtn} title="add item">
        {">>"}
      </div>
    </div>
  );
};
export default MenuItem;
