import './App.css'
import { useState } from 'react'
import ConnectAPI from './components/ConnectAPI';
import AllPlayersList from './components/AllPlayersList';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [players, setPlayers] = useState([]);

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
        <Route path="/players" element={<AllPlayersList players={players} />} />
        <Route path='/players/:playerId' ></Route>
      </Routes>

      <AllPlayersList players={players} />
    </>
  )
}

export default App
