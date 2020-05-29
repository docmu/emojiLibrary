# Description
In this project, I created a jQuery like javascript framework/library. This Emoji library allows developers to input the name of the Emoji 
as a key and get an ascii Emoji returned as a value. Alternatively, random Emojis will be returned of no key was passed.
Just add the Emoji.js library to any javascript project in order to use it. This project uses the concept of IIFE's to define the library.
This way, a new Execution Context for Emoji.js is pushed onto the Execution Stack once invoked. This avoids pollution of the outer scope 
because no variables are going to 'get out' of it.

# Demo
