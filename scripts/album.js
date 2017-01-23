 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 var albumMine = {
     title: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
     artist: 'David Bowie',
     label: 'Rock',
     year: '1972',
     albumArtUrl: 'assets/images/album_covers/ziggy.jpg',
     songs: [
         { title: 'Five Years', duration: '4:42' },
         { title: 'Soul Love', duration: '3:34' },
         { title: 'Moonage Daydream', duration: '4:40' },
         { title: 'Starman', duration: '4:10'},
         { title: 'It A\'int Easy', duration: '2:58'},
         { title: 'Lady Stardust', duration: '3:22'},
         { title: 'Star', duration: '2:47'},
         { title: 'Hang On to Yourself', duration: '2:40'},
         { title: 'Ziggy Stardust', duration: '3:13'},
         { title: 'Suffragate City', duration: '3:25'},
         { title: 'Rock \'n\' Roll Suicide', duration: '2:58'}
     ]
 };

 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumMine);
 };

document.getElementsByClassName('album-cover-art')[0].addEventListener("click", function(){
  var currentImage = document.getElementsByClassName('album-cover-art')[0].getAttribute('src');
  var nextImage;
  //if picasso, switch to marconi
  if (currentImage === "assets/images/album_covers/01.png")
    setCurrentAlbum(albumMarconi);
  
  //if marconi, switch to mine  
  else if (currentImage === "assets/images/album_covers/20.png")  
    setCurrentAlbum(albumMine);
  
  // can only be mine otherwise, in this case go back to picasso
  else
    setCurrentAlbum(albumPicasso);
  
})
