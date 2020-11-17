//Local imports
import Game from '../components/Game';

const GameList = props => {
  let gamesDisplay;
  if (!props.bestGames) {
    gamesDisplay = props.games.map(game => <Game onDelete={props.onDelete} {...game} key={game.id} />);
  } else {
    gamesDisplay = props.games
      .filter(item => item.rating > 4.5)
      .map(game => <Game onDelete={props.onDelete} {...game} key={game.id} />);
  }

  return <div className="game-list">{gamesDisplay}</div>;
};

export default GameList;
