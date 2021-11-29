import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import { nanoid } from "nanoid";

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: nanoid() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <h1>MEMORY</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
