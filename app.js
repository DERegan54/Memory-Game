// Line 2: This postpones the running of all code until the DOM has loaded:
document.addEventListener('DOMContentLoaded', () => {

    // Lines 23-72: This array contains the image file paths for
    //              all images available for cards.
    // Line 73:     This randomizes the indexes of the cardArray, 
    //              which essentially "shuffles" the cards.
    // Line 74:     Here we are selecting the elements to be worked with from 
    //              the DOM and give each element a variable to work with.
    //              The grid variable refers to the <div> where the clickable cards
    //              will be displayed.
    // Line 75:     The resultsDisplay variable refers to the <h3> where the number of matches
    //              made will be displayed to the user.
    // Line 76:     The attemptsDisplay variable refers to the <h3> where the number of attempts
    //              to make matches will be displayed to the user.
    // Line 77-78:  The cardsChosen & cardsChosenId variables refers to the arrays used for keeping track of
    //              which were cards chosen in an attempt to make a match:
    // Line 79:     The cardsWon refers to the array that holds the cards that were
    //              matched, and allows them to be counted in the matchesDisplay. 
    // Line 80:     The cardFlipped variable refers to the array that counts the number of times 
    //              cards were flipped to be shown in the attemptsDisplay.

    const cardArray = [
        {
            name: 'bulldog',
            img: 'app_images/bulldog_clipart_100.png',
        },
        {
            name: 'chihauhua',
            img: 'app_images/chihauhua_clipart_100.png',
        },
        {
            name: 'great dane',
            img: 'app_images/dane_clipart_100.png',
        },
        {
            name: 'golden retriever',
            img: 'app_images/golden_retriever_clipart.png',
        },
        {
            name: 'husky',
            img: 'app_images/husky_clipart_100.png',
        },
        {
            name: 'dalmatian',
            img: 'app_images/dalmatian_clipart_100.png',
        },
        {
            name: 'bulldog',
            img: 'app_images/bulldog_clipart_100.png',
        },
        {
            name: 'chihauhua',
            img: 'app_images/chihauhua_clipart_100.png',
        },
        {
            name: 'great dane',
            img: 'app_images/dane_clipart_100.png',
        },
        {
            name: 'golden retriever',
            img: 'app_images/golden_retriever_clipart.png',
        },
        {
            name: 'husky',
            img: 'app_images/husky_clipart_100.png',
        },
        {
            name: 'dalmatian',
            img: 'app_images/dalmatian_clipart_100.png',
        }
    ] 
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');   
    const resultsDisplay = document.querySelector('#result');   
    const attemptsDisplay = document.querySelector('#tries');  
    let cardsChosen = [];  
    let cardsChosenId = [];   
    let cardsWon = [];   
    let cardsFlipped = [];
    
    // Line 91: The createBoard function renders the clickable cards onto the screen:
    // Line 92: Here we iterate through the cardArray.
    // Line 93: The card variable creates the <>img> elements for each of the clickable "cards":
    // Line 94: This puts the pawprint image on the front of each card.
    // Line 95: Adds the 'card' class to the card element for styling.
    // Line 96: This gives each card an ID (which is the randomized index of the 
    //          image from the cardArray).
    // Line 97: This identifies which function will run when the card is clicked.
    // Line 98: This puts the cards onto the gameBoard.
    function createBoard() {
        for (let i=0; i<cardArray.length; i++) {    
            let card = document.createElement('img');
            card.classList.add('card')   
            card.setAttribute('src', 'app_images/pawprints_clipart_100.png');
            card.setAttribute('data-id', i);   
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Line 130:     The checkFormMatch function checks for matches.
    // Line 131:     The cards variable selects all image elements from teh DOM and gives them
    //               the variable of "cards".
    // Line 132:     The optionOneId identifies the first card clicked as the first item in the 
    //               cardsChosen array and gives it the variable "optionOneId".
    // Line 133:     The optionTwoId identifies the second card clicked as the second item in the 
    //               cardsChosen array and gives it the variable "optionTwoId".
    // Line 134:     This compares the images on the two chosen cards and instructs what to do 
    //               if the two images are a match.
    // Line 135:     This alerts the user that the chosen cards are a match.
    // Line 136-137: This replaces the images on the matched cards to "blank", indicating
    //               that the cards' matches have been found.
    // Line 138:     This moves the items from the cardsChosen array into the cardsWon array
    //               to be counted in the "resultsDisplay".
    // Line 139:     This moves the items from the cardsChosen array into the cardsFlipped array
    //               to be counted in the "attemptsDisplay".
    // Line 140:     This instructs what to do if the two chosen cards are not a match.
    // Line 141-142: This flips the cards back over to reveal the pawprint image on the front of the cards: 
    // Line 143:     This puts the items in the cardsChosen array into the cardsFlipped array 
    //               to be counted in the "attemptsDisplay".
    // Line 144:     This alerts the user that the cards chosen were not a match.
    // Line 146-147: This resets the arrays containing the cardsChosen and CardsChosenId to empty.
    // Line 148:     This renders the number of matches made in the resultsDisplay <h3>.
    // Line 149:     This renders the number of attempts made in the attemptsDisplay <h3>.
    // Line 150:     This counts the number of cards in the cardsWon array.  If it is 
    //               equal to the number of cards in the cardArray, then all of the
    //               possible matches have been made.  
    // Line 151:     This displays that the game has been won in the "Matches" display.

    function checkForMatch() {    
        let cards = document.querySelectorAll('img');    
        const optionOneId = cardsChosenId[0];    
        const optionTwoId = cardsChosenId[1];    
        if (cardsChosen[0] === cardsChosen[1]) {   
            alert('You found a match!');   
            cards[optionOneId].setAttribute('src','app_images/blank_square_100.png');
            cards[optionTwoId].setAttribute('src','app_images/blank_square_100.png');    
            cardsWon.push(cardsChosen);    
            cardsFlipped.push(cardsChosen);
        } else {  
            cards[optionOneId].setAttribute('src', 'app_images/pawprints_clipart_100.png');
            cards[optionTwoId].setAttribute('src', 'app_images/pawprints_clipart_100.png');   
            cardsFlipped.push(cardsChosen);     
            alert('Sorry. Please try again.');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultsDisplay.textContent = cardsWon.length;
        attemptsDisplay.textContent = cardsFlipped.length;
        if (cardsWon.length === cardArray.length/2) {    
            resultsDisplay.textContent = 'Congratulations! You win!'
        }
    }

    // Line 166: The flipCard function will fun whenever a card on the gameBoard is flipped.
    // Line 167: This variable refers to the cardArray index of the image that is
    //           on the back of the cards.
    // Line 168: When a card is clicked, this puts the name of the card (which is
    //           the name of the image from the cardArray) into the cardsChosen array.
    // Line 169: When a card is clicked, this puts the ID of the card (which is the 
    //           data-id created when the card was created in the createBoard function).
    // Line 170: This reveals the image on the back of each card.
    // Line 171: Once two cards have been clicked, this delays the running of the
    //           checkForMatches function by 500 miliseconds.

    function flipCard () {   
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // Line 178: This calls the createBoard function to begin the game.

    createBoard()


})