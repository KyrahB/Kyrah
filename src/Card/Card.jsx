import './Card.css';
import BookData from '../BookData';

function Card() {
  return (
    <div className="container">
      {BookData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} alt="Card Image" />
          <div className="content">
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
