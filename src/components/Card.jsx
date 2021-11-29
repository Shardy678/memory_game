const Card = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div>
        <div className="front">
          <img src={card.src} alt="card front" />
        </div>
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Card;
