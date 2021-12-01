import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { nanoid } from "nanoid";

const cardIcons = [
  { src: "/img/anchor.svg", matched: false },
  { src: "/img/bicycle.svg", matched: false },
  { src: "/img/house.svg", matched: false },
  { src: "/img/plane.svg", matched: false },
  { src: "/img/scissors.svg", matched: false },
  { src: "/img/star.svg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: nanoid() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (!choiceOne || !choiceTwo) return;

    if (choiceOne.src !== choiceTwo.src) {
      setDisabled(true);
      return setTimeout(() => resetTurns(), 1000);
    }

    setCards(prevCards => {
      return prevCards.map(card => {
        const isMatched = card.src === choiceOne.src;
        return isMatched ? { ...card, matched: true } : card;
      });
    });
    resetTurns();
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <h1>Memory</h1>
      <p>Turns: {turns}</p>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="center">
        <button onClick={shuffleCards}>New Game</button>
      </div>
    </div>
  );
}

export default App;
