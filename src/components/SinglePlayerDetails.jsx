const SinglePlayerDetails = ({ puppyArray, selectedPlayerId }) => {
    console.log('puppyArray', puppyArray);
    console.log('selectedPlayerId', selectedPlayerId);

    const selectedPlayer = puppyArray.find((player) => player.id === selectedPlayerId);

    const renderPLayerDetails =() => {
        if(selectedPlayer) {
            return (
                <>
                    <h2>{selectedPlayer.name}</h2>
                    <h4>{selectedPlayer.id}</h4>
                    <h3>Breed: {selectedPlayer.breed}</h3>
                    <h3>{selectedPlayer.name} is on the {selectedPlayer.status}!</h3>
                    <img src={selectedPlayer.imageUrl}/>
                </>
            );
        } else {
            return (<h5>No player selected.</h5>);
        }
    };

    return (
        <>
            <h3>SinglePlayerDetails whats up</h3>
            {renderPLayerDetails()}
        </>
    )
}

export default SinglePlayerDetails;