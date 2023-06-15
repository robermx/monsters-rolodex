import './card.styles.css';

const Card = ({ monster }) => {
  const { email, name, id } = monster;
  return (
    <div className="card-container">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2 className="sub-title">{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
