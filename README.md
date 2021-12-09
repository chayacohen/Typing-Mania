# Typing Mania #

## Table of Contents ##

- [About](#about)

     - [Goal](#goal)
     - [How To Play](#how-to-play)

- [Functionality & MVP's](#functionality--mvps)
- [WireFrames](#wireframes)
- [Technologies, Libraries, APIs](#technologies-libraries-apis)
- [Code](#code)

- [Implementation Timeline](#implementation-timeline)
     - [Friday Aternoon & Weekend](#friday-afternoon--weekend)
     - [Monday](#monday) 
     - [Tuesday](#tuesday)
     - [Wednesday](#wednesday)
     - [Thursday Morning](#thursday-morning)

## About ##

Typing Mania is a game that provides a fun challenge as well as enhances your typing skills. 

[Click Here to Play Typing Mania](#)

<img width="1676" alt="Screen Shot 2021-12-09 at 10 25 23 AM" src="https://user-images.githubusercontent.com/90418154/145425622-f218604f-687e-40a2-a5ca-83c06edd1492.png">

<img width="1680" alt="Screen Shot 2021-12-09 at 10 25 54 AM" src="https://user-images.githubusercontent.com/90418154/145425680-5aba6e08-33b7-48c9-8377-de0bf8c327df.png">

#### Goal ####
The goal of the game is to type the words on the screen before they reach the bottom. When you type in the correct word, the corresponding word will be 
removed from the screen. If they reach the bottom, you will lose one life. You have a total of 3 lives per game.

#### How To Play ####
In the provided textbox, type in a word that matches one of the words on the screen. Click on the submit button (or hit enter on your keyboard) 
to remove the corresponding word off the screen. As you level up, more words will appear on the screen and they will begin to move faster towards the bottom.

## Functionality & MVP's ##

In Typing Mania, users will be able to:

- Type words that match those in the play area. 
- Use the enter or return button to submit the typed word 
- View the amount of lives left based on how many words were missed so far
<!-- - View a list of all the words that appeared on the screen throughout the game once the game ends. They will be able to click on a word and view the corresponding 
definition -->
- View the total amount of words typed throughout the course of the game
- View the streak of how many words were typed before they hit the bottom of the play area


In addition this project will include
- An instructions button that is clickable and in pop-up format. 
- A production READMe.

## WireFrames ##

<img width="1024" alt="Screen Shot 2021-12-02 at 5 58 54 PM" src="https://user-images.githubusercontent.com/90418154/144516533-3fd8a882-4087-4f72-a358-c954187c4192.png">

- The right nav bar will include a Github repo link and an instructions tab. 
- The left nav bar will include the amount of lives left, the total number of words caught, the player's current streak, as well as the current level.
- On the left side, there will be 3 buttons, one to start the game, one to pause the game, and one to reset. 

## Technologies, Libraries, APIs ##
This project will be implemented using the following technologies: 
<!-- - Wordnik API to generate random words to be displayed on the screen.  -->
- NPM random-word included to generate random words
<!-- - Merriam Webster Collegiate Dictionary API to display word definitions once game is over.  -->
- Webpack to bundle up the Javascript code 
- npm to manage project dependencies
- Canvas to manage animation frame


## Code ##

<img width="770" alt="Screen Shot 2021-12-09 at 10 34 01 AM" src="https://user-images.githubusercontent.com/90418154/145426525-1027bbee-c2da-4f59-9d1a-4d8ad8b76e7e.png">

<img width="837" alt="Screen Shot 2021-12-09 at 10 34 38 AM" src="https://user-images.githubusercontent.com/90418154/145426572-54035bc0-d3d2-44e3-96c1-650a047189b1.png">


## Implementation Timeline ## 

### Friday Afternoon & Weekend ###
- Setup the basic structure of the app, including starting webpack and creating the appropriate files
- Create basic structure of webpage, including creating the navbar and the input box on the screen
- Research how to move items on the screen in a slowly falling motion
- Connect my 2 APIs to the app and learn how to use it within my app

### Monday ###

- Create a RandomWord class  
- Create a Game class  
- Using my basic frontend (for now), ensure the game logic is working as intended. 

### Tuesday ###

- Style the webpage to be user friendly
- Work on getting the instructions to be a pop-up
- Work on backgrounds for user to choose
- Work on play, pause, and reset buttons
- Work on github link button 

### Wednesday ###

- Add extra animations to make work turn red and shake as it gets to the bottom of the page
- If there's time, get word to be removed from screen once word is fully typed (so user doesn't have to hit enter / return every time)
- Work on the game auto-leveling up to get the words to go faster down the screen (to increase the difficulty)
- If there's time, have user select difficulty (which will select length of words being displayed)
- Tie up odds & ends 

### Thursday Morning ###
- Finish up odds & ends (hopefully all is working well)
- Deploy to Github pages
- Edit READMe if there's time 

