

import SinglePlayerDetails from './SinglePlayerDetails';

const AllPlayersList = ({ players, setSelectedPlayerId, selectedPlayerId }) => {


  const handleDetailsClick = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const handleBackClick = () => {
    setSelectedPlayerId(null);
  }

  if(selectedPlayerId !== null) {
    const selectedPlayer = players.find((player) => player.id === selectedPlayerId);
    return (
      <div>
        <SinglePlayerDetails player={selectedPlayer} />
        <button onClick={handleBackClick}>Back</button>
      </div>
    );
  }

    return (
        <div>
        {players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <button onClick={() => handleDetailsClick(player.id)}>See Details</button>
          </div>
          
        ))}
        </div>
    )

} 

export default AllPlayersList;