const SinglePlayerDetails = ({ puppyArray, selectedPlayerId }) => {
    console.log('puppyArray', puppyArray);
    console.log('selectedPlayerId', selectedPlayerId);

//     Have a form to CREATE a new player
// Search for a specific player in a search bar and see a 
// new list with only puppies with names that match the text 
// in the search bar.


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