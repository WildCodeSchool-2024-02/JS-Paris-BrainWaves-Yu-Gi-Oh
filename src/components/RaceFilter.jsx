import PropTypes from "prop-types";

function RaceFilter({ setRace }) {
  return (
    <label className="select">
      <select
        onChange={({ target: { value } }) =>
          setRace(
            value.toLowerCase() == "choose a type" ? "" : `&race=${value}`
          )
        }
      >
        <option>Choose a type</option>
        <optgroup label="Monster Cards">
          <option>Aqua</option>
          <option> Beast</option>
          <option> Beast-Warrior</option>
          <option> Cyberse</option>
          <option> Dinosaur</option>
          <option> Divine-Beast</option>
          <option> Dragon</option>
          <option> Fairy</option>
          <option> Fiend</option>
          <option> Fish</option>
          <option> Insect</option>
          <option> Machine</option>
          <option> Plant</option>
          <option> Psychic</option>
          <option> Pyro</option>
          <option> Reptile</option>
          <option> Rock</option>
          <option> Sea Serpent</option>
          <option> Spellcaster</option>
          <option> tdunder</option>
          <option> Warrior</option>
          <option> Winged Beast</option>
          <option> Wyrm</option>
          <option> Zombie</option>
        </optgroup>
        <optgroup label="Spell Cards">
          <option>Normal</option>
          <option>Field</option>
          <option>Equip</option>
          <option>Continuous</option>
          <option>Quick-Play</option>
          <option>Ritual</option>
        </optgroup>
        <optgroup label="Trap Cards">
          <option>Normal</option>
          <option>Continuous</option>
          <option>Counter</option>
        </optgroup>
      </select>
    </label>
  );
}

RaceFilter.propTypes = {
  setRace: PropTypes.func
};

export default RaceFilter;
