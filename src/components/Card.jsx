import PropTypes from "prop-types"
import { useNavigate, useLocation } from "react-router-dom";

function Card({data}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <article className="card" onClick={() => navigate(`/card/${data.id}`)}>
      <h4>{data.name}</h4>
      {data.card_images[0] && <img src={data.card_images[0].image_url}></img>}
      <p>{data.race}</p>
      {location.pathname !== "/" && (
        <>
          <ul className="stats-tabs">
            <li>
              <a href="#">
                {data.level} <span>LVL</span>
              </a>
            </li>
            <li>
              <a href="#">
                {data.atk} <span>ATK</span>
              </a>
            </li>
            <li>
              <a href="#">
                {data.def} <span>DEF</span>
              </a>
            </li>
          </ul>
          <p>{data.desc}</p>
        </>
      )}
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card;