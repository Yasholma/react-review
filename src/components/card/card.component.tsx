import { IMonster } from "../../interfaces";

import "./card.styles.css";

interface CardProps {
  monster: IMonster;
}

const Card: React.FunctionComponent<CardProps> = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
