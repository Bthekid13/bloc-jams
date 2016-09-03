// making a fat obj 

var albumSgtPepper = {
  title: "Sgt. Pepper's Lonely Hearts Club Band",
  artist: "The Beatles",
  label: "Parlophone (UK), Capitol (US)",
  year: '1967',
  albumArtUrl: 'assets/images/album_covers/sgt_pepper.png',
  songs: [
 { title: "Sgt. Pepper's Lonely Hearts Club Band", duration: "2:02"},   
 { title: "With a Little Help from My Friends", duration: "2:44"},
 { title: "Lucy in the Sky with Diamonds", duration: "3:28"},	
 { title: "Getting Better", duration: "2:48"},	
 { title: "Fixing a Hole", duration: "2:36"},	
 { title: "She's Leaving Home", duration: " 3:35"},	
 { title: "Being for the Benefit of Mr. Kite!" , duration: "2:37"},
 { title: "Within You Without You", duration: "5:04"},
 { title: "When I'm Sixty-Four", duration: "2:37"},	
 { title: "Lovely Rita" , duration: "2:42"},
 { title: "Good Morning Good Morning", duration: "2:41"},	
 { title: "Sgt. Pepper's Lonely Hearts Club Band (Reprise)", duration: " 1:19"},
 { title: "A Day in the Life" , duration: "5:39"}
  ]
};

var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14'},
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21' },
    { title: 'Magenta', duration: '2:15' }
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: "Hello, Operator?", duration: '1:01' },
    { title: "Ring, ring, ring", duration: '5:01' },
    { title: "Fits in yoru pocket", duration: '3:21' },
    { title: "Can you hear me now?", duration: '3:14' },
    { title: "Wrong phone number", duration: '2:15' }
  ]
};

function createSongRow(songNumber, songName, songLength) {
  var template = 
    '<tr class="album-view-song-item">'
  + ' <td class="song-item-number">' + songNumber + '</td>'
  + ' <td class="song-item-title">' + songName + '</td>'
  + ' <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;
  
  return template;
};

  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


var setCurrentAlbum = function(album) {
  
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + " " + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  
  albumSongList.innerHTML = '';
  
  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso);
  
   var albums = [albumPicasso, albumMarconi, albumSgtPepper];
   var index = 1;
  
  albumImage.addEventListener("click", function(event) {
    setCurrentAlbum(albums[index]);
    index++;
    if (index === albums.length) {
      index = 0;
    }  
    
  });
  
};



