import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//Local imports
import GameDetails from './pages/GameDetails';
import Header from './components/Header';
import GameList from './pages/GameList';
import Button from './components/Button';
import './styles/App.scss';

const App = () => {
  const [bestGames, setBestGames] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    let response;
    try {
      response = await axios.get('https://apis.wilders.dev/wild-games/games/');
    } catch (error) {
      console.log('[ERROR][FETCHGAMES]: ', error);
    }
    if (!response) return;
    setGames(response.data);
  };

  const deleteHandler = id => {
    setGames(prev => prev.filter(item => item.id !== id));
  };

  const bestGamesHandler = () => {
    setBestGames(prev => !prev);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Header title="Checkpoint" />
            <GameList bestGames={bestGames} games={games} onDelete={deleteHandler} />
            <Button bestGames={bestGames} onClick={bestGamesHandler} />
          </div>
        </Route>
        <Route path="/details/:id" exact>
          <GameDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
