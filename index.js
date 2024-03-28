// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Do for love", artist: "Snoh Aalegra", genre: "R&B" },
    { title: "Promises", artist: "Maverick City & Naomi Raine", genre: "Gospel" },
    { title: "All for you", artist: "Glenn Jones", genre: "Soul" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Soul",
    "Groot": "Gospel",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian.

    Object.entries(guardians).map(([guardian, preferredGenre]) => {
    const playlist = songs.filter(song => song.genre === preferredGenre);

    displayPlaylists(guardian, playlist)
   });
}

// Function to create HTML elements for playlists and append them to the playlist div.
 
function displayPlaylists(guardian, playlist) {
    const playlistContainer = document.getElementById('playlists');

    const guardianPlaylistContainer = document.createElement('div');
        guardianPlaylistContainer.classList.add('playlist'); // Add class for styling
        const guardianHeading = document.createElement('h4');
        guardianHeading.textContent = `${guardian}'s Playlist:`;
        
        guardianPlaylistContainer.appendChild(guardianHeading); // Append heading to playlist container
    playlist.forEach(song => {
        
            const songList = document.createElement('p');
            songList.classList.add('song'); // Add class for styling
            
            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title'); // Add class for styling
            songTitle.textContent = song.title;
            songList.appendChild(songTitle); // Append song title to song div

            // const songArtist = document.createElement('div');
            songList.innerHTML += `by ${song.artist}`;
            
            
            // songList.appendChild(songArtist); // Append song artist to song div
            
            guardianPlaylistContainer.appendChild(songList); // Append song div to playlist container
    });

    playlistContainer.appendChild(guardianPlaylistContainer); // Append playlist container to main container
}

generatePlaylist(guardians, songs);
