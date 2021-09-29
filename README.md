# React Treasure Hunt Game

### Remember:
- Pseudocode!!
- Ask clarifying questions

### User Stories
- As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.
-branch: board-gameboard
-added a div to square with stlying
-imported Square to App
-mapped over the array in state and returned the Square compnt call
-wrapped adiv around the mapped components
-styled the gameboard using flexbox
-name a variable in div on app.js
-added styles to the square for question mark

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
-checked out a branch
-want to click on a Square----add function onto component add add reference this.handleClick to onclick
pass what you want to call as a variable={}
  place that info in the alert this.props.index
Call the function to get info back to the parent handleGamePlay = ()=>{}
place in the Square call and on the square.js
-branch: alert-index
-created a handler method on aquare adiv-passed index as prop to Square-created a handleGamePlay method as a functional props
-passed to square

- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
-tree emoji branch
-on any given event tree appears on a certain index
-since manipulatin board...do code outside state---const{board} makes a variable
-destructured board out of state
-updated value with emoji
CTRL, CMMd, space bar for emoji
setState ater manipulate
(Done)

- As a user, if I select the winning square the question mark will become a treasure emoji.
- As a user, if I select the losing square the question mark will become a bomb emoji.
-Making both into a single user story
-branch: treasure-bomb
-store the emojis first in the state
treasureLoc: null,
bombLoc: null
create lifecycle method-----componentDidMount(){}
set values to random numbers
-Destructure to allow conditional statements
(Done)

- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
-branch: guesses-left
-store guess in state
-h2 Guesses Left
-handleGamePlay added newGuess as a variable to else statement
(Done)

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
-grouping messages together
-branch-got-message
-Took care of messages in the handleGamePlay() updated this.setState({guess: newGuess})-added variable for newGuess--added
setTimeout(() => {alert ("")}, 100)
to allow message to pop up after image is displayed.
(Done)
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can click on a “Play Again” button that will restart the game.
