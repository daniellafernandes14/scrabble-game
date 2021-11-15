import React from "react";


const MainPage = () => {
  return (
    <div>
      <h3>This is the home page</h3>
    </div>
  );
}

export default MainPage;

// Creating an array
const NewArray = () => {
  // const newArray = array.map((x) => String.fromCharCode(x));
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return Array.from({
    length: 10
  }, () => alphabet[Math.floor(Math.random() * alphabet.length)])
}
console.log(NewArray());
