import "./App.css";
import { useState } from "react";

const cardIcons = [
  { src: "/img/anchor.svg" },
  { src: "/img/bicycle.svg" },
  { src: "/img/house.svg" },
  { src: "/img/plane.svg" },
  { src: "/img/scissors.svg" },
  { src: "/img/star.svg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };
  return (
    <div className="App">
      <h1>MEMORY</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
