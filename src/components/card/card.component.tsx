import { Component, ReactNode } from "react";
import { IMonster } from "../../interfaces";

import "./card.styles.css";

interface CardProps {
  monster: IMonster;
}

class Card extends Component<CardProps> {
  render(): ReactNode {
    const { id, name, email } = this.props.monster;

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
  }
}

export default Card;
