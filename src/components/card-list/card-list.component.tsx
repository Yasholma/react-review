import { Component, ReactNode } from "react";
import { IMonster } from "../../interfaces";
import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: IMonster[];
}

class CardList extends Component<CardListProps> {
  render(): ReactNode {
    console.log("CardList render");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster: IMonster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
