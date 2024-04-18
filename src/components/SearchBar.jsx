import PropTypes from "prop-types";

function SearchBar({setSearch}) {
  return <input onInput={({ target: { value } }) =>
          setSearch(
            value.toLowerCase() !== "" ? `&fname=${value}` : ""
          )
        } type="text" placeholder="Search"></input>
}

SearchBar.propTypes = {
  setSearch: PropTypes.func
};

export default SearchBar;