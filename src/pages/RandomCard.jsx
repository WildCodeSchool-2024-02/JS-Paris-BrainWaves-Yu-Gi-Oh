import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function RandomCard() {
  const { data } = useLoaderData();
  return (
    <main>
      <Card data={data} />
    </main>
  );
}

export default RandomCard;