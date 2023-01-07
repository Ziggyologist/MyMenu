import styles from "./MenuItem.module.scss";

const MenuItem = function (props) {
  const {name, ingredients, instructions, key} = props.props;
  return (
    <div key={key} className={styles.container}>
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
  );
};
export default MenuItem;