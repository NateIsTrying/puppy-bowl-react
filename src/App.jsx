import './App.css'
import { useState } from 'react'
import ConnectAPI from './components/ConnectAPI';
import AllPlayersList from './components/AllPlayersList';
import { Routes, Route, Link } from 'react-router-dom';
import SinglePlayerDetails from './components/SinglePlayerDetails';
import CreateForm from './components/CreateForm';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  return (
    <>
      <ConnectAPI setPlayers={setPlayers} />

      <nav>
        <ul>
          <li>
            <h3>
              <Link to='/'>Home </Link>
            </h3>
          </li>
          <li>
            <h3>
              <Link to='/players'>All Players </Link>
            </h3>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/players" element={<AllPlayersList players={players} setSelectedPlayerId={setSelectedPlayerId} />} />
        <Route path='/players/:playerId' element={<SinglePlayerDetails puppyArray={players} selectedPlayerId={selectedPlayerId} />} />
      </Routes>

      <CreateForm />

      {(selectedPlayerId !== null) ? (
        <SinglePlayerDetails puppyArray={players} selectedPlayerId={selectedPlayerId}/>
        ) : (
          <AllPlayersList players={players} selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId} />
        )}
    </>
  );
};

export default App
