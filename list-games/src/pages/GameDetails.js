import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

//Local imports
import Button from '../components/Button';

const GameDetails = props => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    let response;
    try {
      response = await axios.get('https://apis.wilders.dev/wild-games/games/' + id);
    } catch (error) {
      console.log('[ERROR][FETCHGAMES]: ', error);
    }
    if (!response) return;
    setGame(response.data);
  };

  return (
    game && (
      <>
        <div className="details-container">
          <img className="details-image" src={game.background_image} alt="bg" />
          <h1>{game.name}</h1>
          <h3>{game.released}</h3>
          <div className="details-tags">
            {game.genres.map(item => (
              <p className="details-tag" key={item.name}>
                {item.name}
              </p>
            ))}
          </div>
          <video src={game.clip.clip} autoPlay muted />
        </div>
        <Link to="/">
          <Button onClick={() => {}} bestGames={true} />
        </Link>
      </>
    )
  );
};

export default GameDetails;
