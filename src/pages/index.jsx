import React from "react";
import GuessForm from "../components/form";

const MainPage = () => {
  return (
    <div>
      <h3>This is the home page</h3>
      {NewArray()}
      <GuessForm />
    </div>
  );
}

export default MainPage;

// Creating an array
const NewArray = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return Array.from({
    length: 10
  }, () => alphabet[Math.floor(Math.random() * alphabet.length)])
}
console.log(NewArray());
