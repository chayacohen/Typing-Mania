# Typing Mania #

## Table of Contents ##

- [About](#about)

     - [Goal](#goal)
     - [How To Play](#how-to-play)

- [Functionality & MVP's](#functionality--mvps)
- [WireFrames](#wireframes)
- [Technologies, Libraries, APIs](#technologies-libraries-apis)

- [Implementation Timeline](#implementation-timeline)
     - [Friday Aternoon & Weekend](#friday-afternoon--weekend)
     - [Monday](#monday) 
     - [Tuesday](#tuesday)
     - [Wednesday](#wednesday)
     - [Thursday Morning](#thursday-morning)

## About ##

Typing Mania is a game that provides a fun challenge as well as enhances your typing skills. 

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
- View a list of all the words that appeared on the screen throughout the game once the game ends. They will be able to click on a word and view the corresponding 
definition
- View the total amount of words typed throughout the course of the game
- View the streak of how many words were typed before the hit the bottom of the play area


In addition this project will include
- An instructions button that is clickable and in a pop-up format once clicked. 
- A production READMe.

## WireFrames ##

<img width="1024" alt="Screen Shot 2021-12-02 at 5 58 54 PM" src="https://user-images.githubusercontent.com/90418154/144516533-3fd8a882-4087-4f72-a358-c954187c4192.png">


- The right nav bar will inlude Github repo link, dropdown theme menue, an instructions tab. It will also include the amount of lives left, the total number of words caught, and the player's current streak.
- On the left side, there will be 3 buttons, one to start the game, one to pause the game, and one to reset. 
- On the right, there will be options to change background color. 

## Technologies, Libraries, APIs ##
This project will be implemented using the following technologies: 
- Wordnik API to generate random words to be displated on the screen. 
- Merriam Webster Collegiate Dictionary API to display word definitions once game is over. 
- Webpack to bundle up the Javascript code 
- npm to manage project dependencies

## Implementation Timeline ## 

### Friday Afternoon & Weekend ###
- Setup the basic structure of the app, including starting webpack and creating the appropriate files
- Create basic structure of webpage, including creating the navbar and the input box on the screen
- Research how to move items on the screen in a slowly falling motion
- Connect my 2 APIs to the app and learn how to use it within my app

### Monday ###

- Create a RandomWord class  
- Create a Game class  
- Using by basic frontend (for now), ensure the game logic is working as intended. 

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


