import { IMonster } from "../../interfaces";
import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: IMonster[];
}

const CardList: React.FunctionComponent<CardListProps> = ({
  monsters,
}: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster: IMonster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
