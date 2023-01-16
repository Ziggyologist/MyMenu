const IngredientItem = props => {
  const allFoods = props.allFoods;
  const selectedDishes = props.selectedDishes;
  const dishNames = allFoods.map(food => food.name);

  const allIngredients = selectedDishes.map((dish, i) => {
    if (dishNames.includes(dish)) {
      const index = dishNames.indexOf(dish);

      const dishIngredients = allFoods[index].ingredients.map(
        ingredient => ingredient.ingredient
      );
      return dishIngredients;
    }
  });
  const ingredient = allIngredients.flatMap(i => i);
  const ingredient2 = new Set(ingredient);
  const ingredient3 = [...ingredient2];

  return (
    <>
      <p>All ingredients (no repeat)</p>
      {ingredient3.map((ingr, ix) => (
        <li key={ix}>{ingr}</li>
      ))}
    </>
  );
};
export default IngredientItem;
