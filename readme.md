# SaCReD 
A package to convert eastern to western musical notation, for example, *SA RE GA ma* to *C D E F*.  

## Installation 
> `npm install --save sacred`

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

## API 
-   function __relativeToAbsolute(__ inputNoteString, tonic __)__
      
      __Input__ `inputNoteString` : String, `tonic` : String 

      __Returns__ Western notes in an __Array__ corresponding to `inputNoteString`.

## Example
    var sacred require('sacred');
    var notes = 'SA RE GA ma পা ধা নি সা*'
    var tonic = 'C4'
    var output = sacred.relativeToAbsolute(notes, tonic);
    
    console.log(output);
    // Expected console-output:
    //  [ 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5' ]

