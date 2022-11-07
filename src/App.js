import React from "react";
import MenuNav from "./Components/Layout/NavMenu/MenuNav";
import MainMenu from "./Components/Layout/MainMenu/MainMenu";
import IngredientsMenu from "./Components/Layout/IngredientsMenu/IngredientsMenu";
import MainContainer from "./Components/UI/MainContainer";

function App() {
  return (
    <MainContainer>
      <MenuNav></MenuNav>
      <MainMenu></MainMenu>
      <IngredientsMenu></IngredientsMenu>
    </MainContainer>
  );
}

export default App;
