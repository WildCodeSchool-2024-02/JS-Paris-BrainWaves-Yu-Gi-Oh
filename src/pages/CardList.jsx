import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
// import Card component here
import Card from "../components/Card";
import { useEffect } from "react";

function CardList() {
  const [cards, setCards] = useState([]);
  const [race, setRace] = useState("");
  const [search, setSearch] = useState("");
  // get data from API here

  useEffect(() => {
    axios
      .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0${race}${search}`)
      .then(({ data }) => setCards(data.data));
  }, [race, search])

  return (
    <main>
      <aside>
        <h3>Apply filters</h3>
        <SearchBar setSearch={setSearch} />
        <RaceFilter setRace={setRace} />
      </aside>
      {/* map cards here */}
      <section>
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </section>
    </main>
  );
}

export default CardList;