import { BaseSyntheticEvent } from "react";

import "./search-box.styles.css";

interface SearchBoxProps {
  onChangeHandler: (e: BaseSyntheticEvent) => void;
  placeholder: string;
  className: string;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
