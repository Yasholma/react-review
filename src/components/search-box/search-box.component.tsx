import { BaseSyntheticEvent, Component, ReactNode } from "react";

import "./search-box.styles.css";

interface SearchBoxProps {
  onChangeHandler: (e: BaseSyntheticEvent) => void;
  placeholder: string;
  className: string;
}

class SearchBox extends Component<SearchBoxProps> {
  render(): ReactNode {
    console.log("SearchBox render");

    const { onChangeHandler, placeholder, className } = this.props;

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
