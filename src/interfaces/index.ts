export interface IMonster {
  id: string;
  name: string;
  email: string;
}

export interface IAppState {
  monsters: IMonster[];
  searchField: string;
}
