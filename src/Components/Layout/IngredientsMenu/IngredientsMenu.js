import IngredientItem from "./IngredientItem";

const IngredientsMenu = props => {
  const allFoods = props.allFoods;
  const selectedDishes = props.selectedDishes;

  return (
    <>
      <div>
        <ol>
          <IngredientItem allFoods={allFoods} selectedDishes={selectedDishes} />
        </ol>

        {/* <IngredientItem allFoods={allFoods} selectedDishes={selectedDishes} /> */}
      </div>
    </>
  );
};
export default IngredientsMenu;
