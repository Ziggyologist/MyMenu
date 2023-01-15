const IngredientsMenu = props => {
  const allFoods = props.allFoods;
  const selectedDishes = props.selectedDishes;
  const filtered = allFoods.filter((food, i) => food.name === "");
  console.log(filtered);
  return (
    <>
      <div>ingredients</div>
    </>
  );
};
export default IngredientsMenu;
