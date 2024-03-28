# [JSL05] Submission: Galaxy Playlist Generator

### Galaxy Playlist Generator

## Overview:
In this project I combined my knowledge of JavaScript arrays and the `map()` function to create a personalized "Awesome Mix" playlist for each of the Guardians of the Galaxy. I filtered and organized songs based on each Guardian's musical preference, displaying a playlist tailored just for them.

# Guardians' Playlist Generator

This script generates playlists for each Guardian of the Galaxy based on their preferred music genre.

## How it Works

### 1. Songs Array

The script contains an array called `songs` which includes various songs with properties like title, artist, and genre.

### 2. Guardians' Preferences

It also defines an object called `guardians` which holds the preferred genre of each Guardian. Initially, it includes preferences for Star-Lord and Gamora. Later, preferences for Drax, Rocket, and Groot are added.

### 3. Playlist Generation

The `generatePlaylist` function is responsible for generating playlists for each Guardian. It uses the `map()` function to iterate over each Guardian's preferred genre and filters the songs based on that genre. Then, it calls the `displayPlaylists` function to display the playlists.

### 4. Displaying Playlists

The `displayPlaylists` function creates HTML elements for playlists and appends them to the HTML document. It receives a Guardian's name and their corresponding playlist as arguments, then creates a container for the playlist and appends each song title along with its artist to the container.

## Usage

To generate and display the playlists, simply call the `generatePlaylist` function with the `guardians` and `songs` arrays as arguments.

```javascript
generatePlaylist(guardians, songs);






