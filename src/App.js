import React from "react";
import {useState} from "react";
import MenuNav from "./Components/Layout/NavMenu/MenuNav";
import MainMenu from "./Components/Layout/MainMenu/MainMenu";
import IngredientsMenu from "./Components/Layout/IngredientsMenu/IngredientsMenu";
import MainContainer from "./Components/UI/MainContainer";
import "./App.scss";
import {foods, allUsers} from "./Components/Store/database";

function App() {
  const selectedFoods = foods;
  return (
    <div className="mainAppBackground">
      <MainContainer>
        <MenuNav userName={allUsers[0].user_name} />
        <MainMenu selectedFoods={selectedFoods} />
        <IngredientsMenu />
      </MainContainer>
    </div>
  );
}

export default App;
