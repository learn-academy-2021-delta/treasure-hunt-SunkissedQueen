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
- As a user, if I select the winning square the question mark will become a treasure emoji.
- As a user, if I select the losing square the question mark will become a bomb emoji.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.
