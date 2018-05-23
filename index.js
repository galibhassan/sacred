// Imports 
var inputTextAnalyzer = require('./src/inputTextAnalyzer');
var Song = require('./src/song');


var relativeToAbsolute = function(in_noteString, tonic){
   var inputSong = inputTextAnalyzer.generateThings(in_noteString);
   var song = new Song(inputSong.noteList, tonic);
   return song.getAbsoluteNotes();
}


module.exports = {
  relativeToAbsolute: relativeToAbsolute
}

