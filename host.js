function createRoom() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let roomCode = '';
    for (let i = 0; i < 6; i++) {
        roomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('roomCode').innerText = `Room Code: ${roomCode}`;
    // Voit lisätä huonekoodin tallennuksen backend-palvelimeen, kuten Renderiin
}

fetch('https://guesswho-backend.onrender.com/create-room', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ roomCode: roomCode }),
}).then(response => response.json())
  .then(data => console.log('Room created:', data))
  .catch(error => console.error('Error:', error));
