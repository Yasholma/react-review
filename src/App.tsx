import React, { BaseSyntheticEvent, Component } from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.css";
import { IAppState, IMonster } from "./interfaces";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props: any) {
    super(props);
    console.log("App constructor >>");
  }

  state: IAppState = {
    monsters: [],
    searchField: "",
  };

  async componentDidMount(): Promise<void> {
    console.log("App componentDidMount >>");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState((prevState) => ({ ...prevState, monsters: data }));
  }

  onSearchChange = (e: BaseSyntheticEvent) => {
    this.setState((prevState: IAppState) => ({
      ...prevState,
      searchField: e.target.value.toLowerCase(),
    }));
  };

  render(): React.ReactNode {
    console.log("App render >>");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster: IMonster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Freezy Monsters</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
