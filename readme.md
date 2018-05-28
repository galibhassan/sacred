# SaCReD Music 
A package to convert eastern to western musical notation, for example, *SA RE GA ma* to *C D E F*.  

## Installation 
> `npm install --save sacred-music`

## Description
This node package provides a functionality which takes eastern notations either in Bangla (Bengali) or English alphabet, and converts into western notations in English alphabet. 

Melodies of Bangla songs are commonly confined within three octaves:
- Lower octave ( Mondro Shoptok or মন্দ্রসপ্তক ), 
- Middle octave ( Moddho Shoptok or মধ্যসপ্তক ), 
- Upper octave ( Tara Shoptok or তারাসপ্তক ). 

#### Middle Octave
In this package, we have denoted the 12 notes of the __Middle Octave__ as:
  >    SA re RE ga GA ma MA PA da DHA ni NI

  or 

  > সা ঋ রে জ্ঞা গা মা হ্মা পা দা ধা ণি নি

#### Lower Octave 
The 12 notes of the __Lower Octave__ is denoted by putting an __Underscore ( _ )__ as suffix to the any note of the middle octave. Hence the notes are:
  >    SA_ re_ RE_ ga_ GA_ ma_ MA_ PA_ da_ DHA_ ni_ NI_

  or 

  > সা_ ঋ_ রে_ জ্ঞা_ গা_ মা_ হ্মা_ পা_ দা_ ধা_ ণি_ নি_

  #### Upper Octave
  The __Upper Octave 12-notes__ are denoted by suffixing a middle octave note by an __Asterisk ( * )__. Hence:
  
  > SA* re* RE* ga* GA* ma* MA* PA* da* DHA* ni* NI*

  or 

  > সা* ঋ* রে* জ্ঞা* গা* মা* হ্মা* পা* দা* ধা* ণি* নি*
  
  ### The Tonic
  The tonic string should be specified by the user. Below, we present the writing convention of chromatic scale for __C5__ :
  
  
| Note (5th octave)  | String |
| ----- | ------ |
| C  | `'C5'`  |
| C♯/ D♭  | `'Cs5'`  |
| D  | `'D5'`  |
| D♯/ E♭  | `'Ds5'`  |
| E  | `'E5'`  |
| F  | `'F5'`  |
| F♯/G♭  | `'Fs5'`  |
| G  | `'G5'`  |
| G♯/A♭  | `'Gs5'`  |
| A  | `'A5'`  |
| A♯/B♭  | `'Bf5'`  |
| B  | `'B5'` |

For different octaves, just change the octave-number, e.g. `'C1'`, `'C2'`, etc.  

  

## API 
-   function __relativeToAbsolute(__ `inputNoteString`, `tonic` __)__
      
      __Input__ `inputNoteString` : String - any string containing eastern notes, `tonic` : String - a tonic string (see the table above).
      
      __Returns__ Western notes in an __Array__ corresponding to `inputNoteString`.
    ### Example
    ```js
    var sacredMusic = require('sacred-music');
    var notes = 'SA RE GA ma পা ধা নি সা*';
    var tonic = 'C4';
    var output = sacredMusic.relativeToAbsolute(notes, tonic);
        
    console.log(output);
    // Expected console-output:
    //  [ 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5' ]
    ```



- function __getSongDetails(__ `inputNoteString` __)__

    __Input__ `inputNoteString` : String - any string containing eastern notes.

    __Returns__ an *object*, say, `songDetail` which contains:
    - `noteList`: *Array* - The list of all notes from user input (sequentially), 
    - `noteSet`: *Array* - The __Set__ of unique notes, i.e. no notes occuring twice in this array,
    - `bars` : *Array* of arrays - Each element is an array and represents a **Bar**. Bars (also called *measures* in literature) are seperated by a slash ( **/** ). 
    - `noOfBars`: *Integer* - Number of bars in the song.
    - `barsWithNoteCount`: *Array* of arrays - Each element is a subarray. An elements of a subarray represents the number of notes located in that specific position.

  ### Example
  ```js
  var sacredMusic = require('sacred-music');
  var notes = 'sa+re ga sa+re ga / re+ga+sa ga re sa / ga re sa re';
  var songDetail = sacredMusic.getSongDetails(notes);
  console.log(songDetail);

  // expected output:
  { 
    noteList: [ 'sa','re','ga','sa','re','ga','re','ga','sa','ga','re','sa','ga','re','sa','re' ],
    noteSet: [ 'sa', 're', 'ga' ],
    bars: [ 'sa+re ga sa+re ga', 're+ga+sa ga re sa', 'ga re sa re' ],
    noOfBars: 3,
    barsWithNoteCount: [ [ 2, 1, 2, 1 ], [ 3, 1, 1, 1 ], [ 1, 1, 1, 1 ] ] 
  }
  ```
  Notice, for example, `(songDetail.barsWithNoteCount[1])[0] = 3` corresponds to `re+ga+sa` in the input string.


## Invalid input
  If the you input an arbitrary string which does not contain any of the easter notes, dont worry. It will report the invalidity of the note with an error message.  

    
## FAQ
- *Why on earth it is named __sacred music__? Does it have anything to do with religion or so?*

  Nope. In fact if you take __C__ as tonic, then *SA* converts to *C* and *Re* converts to *D*. Now guess, why it's __sacred__! 
  And __music__ is because somebody already published a node package with the name *sacred*. Alas!
  Feel free to stick to the faith that it *is* something sacred if you haven't still crunched the riddle. ;-) 
