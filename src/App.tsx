import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.css";
import { IMonster } from "./interfaces";
import SearchBox from "./components/search-box/search-box.component";

const App: React.FunctionComponent = () => {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  const [filteredMonsters, setFilteredMonsters] =
    useState<IMonster[]>(monsters);

  useEffect(() => {
    const fetchMonsters = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMonsters(data);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters: IMonster[] = monsters.filter(
      (monster: IMonster) => monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: BaseSyntheticEvent): void => {
    setSearchField(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Freezy Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />{" "}
    </div>
  );
};

export default App;
