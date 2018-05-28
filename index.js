// Imports 
var inputTextAnalyzer = require('./src/inputTextAnalyzer');
var Song = require('./src/song');
var utils = require('./src/utils');
var noteMapper = require('./src/noteMapper');

var relativeToAbsolute = function (in_noteString, tonic) {
  if (typeof (in_noteString) === 'string') {
    var inputSong = inputTextAnalyzer.generateThings(in_noteString);
    var song = new Song(inputSong.noteList, tonic);
    return song.getAbsoluteNotes();
  }
  else if (typeof(in_noteString) == "object" && in_noteString instanceof Array) {
    var song = new Song(in_noteString, tonic);
    return song.getAbsoluteNotes();
  }

}

var getSongDetails = function (in_noteString) {
  return inputTextAnalyzer.generateThings(in_noteString);
}

module.exports = {
  relativeToAbsolute: relativeToAbsolute,
  getSongDetails: getSongDetails,
  utils: utils,
  noteMapper: noteMapper
}
