import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function CardDetails() {

  const { data } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>back to the list</button>
    <main>
      <Card data={data.data[0]} />
    </main>
    </>
  )
}

export default CardDetails;
