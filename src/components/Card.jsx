const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <div className="front">
          <img src={card.src} alt="card front" />
        </div>
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Card;
