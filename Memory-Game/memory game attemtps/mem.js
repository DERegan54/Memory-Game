// Postpones the running of all code until the DOM has loaded:
document.addEventListener("DOMContentLoaded", () => {

    // This array contains the images available for cards:
    const cardArray = [
        {
            name: "bulldog",
            img: "images/bulldog_clipart_100.png",
        }, 
        {
            name: "chihauhua",
            img: "images/chihauhua_clipart>100.png",
        },
        {
            name: "dalmatian",
            img: "images?dalmatian_clipart_100.png",
        },
        {
            name: "great dane",
            img: "images/dane_clipart_100.png",
        },
        {
            name: "golden retriever",
            img: "image/golden_retriever_clipart_100.png",
        }, 
        {
            name: "husky",
            img: "images/husky_clipart_100.png",
        },
        {
            name: "bulldog",
            img: "images/bulldog_clipart_100.png",
        }, 
        {
            name: "chihauhua",
            img: "images/chihauhua_clipart>100.png",
        },
        {
            name: "dalmatian",
            img: "images?dalmatian_clipart_100.png",
        },
        {
            name: "great dane",
            img: "images/dane_clipart_100.png",
        },
        {
            name: "golden retriever",
            img: "image/golden_retriever_clipart_100.png",
        }, 
        {
            name: "husky",
            img: "images/husky_clipart_100.png",
        }
    ]

    //Here we select the elements to be worked with from the DOM
    // and give each element a variable to work with:

    // This variable refers to the <div> where the clickable cards 
    // will be displayed:
    const gameBoard = document.querySelector("#gameBoard");
    // This variable refers to the <h3> where the number of 
    // matches made will be displayed:
    const matchesDisplay = document.querySelector("#matches");
     // This variable refers to the <h3> where the number of 
    // matches made will be displayed:
    const attemptsDisplay = document.querySelector("#attempts");

    // This variable refers to the array used for keeping track 
    // of the cards chosen to attempt to match:
    let cardsChosen = [];
    // This variable refers to the array used for keeping track 
    // of the IDs of the cards chosen to attempt to match:
    let cardsChosenId = [];
    // This array holds the cards that were matched and allows 
    // them to be counted in the matchesDisplay:
    let cardsWon = [];
    // This array is to count the number of times cards were flipped
    // for the attemptsDisplay:
    let cardsFlipped = [];

    // "Shuffles the cards (randomizes the indexes of the cardArray):
    cardArray.sort(() => 0.5 - Math.random());

    // Creates game board:
    function createBoard() {
        // Iterates through the cardArray:
        for (let i=0; i<cardArray.length; i++) {
            // Creates "cards" (an img element for each cardArray item):
            let card = document.createElement("img");
            // Puts the pawprint image on the front of each card
            card.setAttribute("src", "images/pawprints.clipart_100.png");
            // The data-id is the index of the image from the cardArray 
            // that will go on each card:
            card.setAttribute("data-id", i);
            // Identifies which function to run when a card is clicked:
            card.addEventListener("click", flipCard);
            // Puts the cards onto the gameGoard:
            gameBoard.appendChild(card);
        }
    }
    
    // This function will run whenever a card on the gameBoard is clicked:
    function flipCard() {
        // This tells us the cardArray index of the image that is on the back
        // of the card:
        let cardId = this.getAttribute("data-id");
        // When a card is clicked, this puts the name of the card (which is 
        // the name of the image from the cardArray) into the cardsChosen array: 
        cardsChosen.push(cardArray[cardId].name);
        // When a card is clickes, this puts the ID of the card (which is the data-id 
        // created when the card was created in the createBoard function):
        cardsChosenId.push(cardId);
        // This reveals the image on the back of each card:
        this.setAttribute("src", cardArray[cardId].img);
        // Once two cards have been clicked, this delays the running
        // of the checkForMatches function by 0.5 seconds:
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // This function checks for matches:
    function checkForMatch() {
        // This selects all images from the DOM and gives them the 
        // variable of "cards":
        let cards = document.querySelectorAll("img");
        // This identifies the first card clicked as the first item in the 
        // cardsChosen array, and gives it the variable of cardOneID:
        const cardOneId = cardsChosenId[0];
        // This identifies the second card clicked as the second item in the 
        // cardsChosen array, and gives it the variable of cardTwoID:
        const cardTwoId = cardsChosen[1];
        // This compares the images on the two chosen cards and instructs
        // what to do if the two images are a match:
        if (cardsChosenId[0] === cardsChosenId[1]) {
            // This alerts the user that the chosen cards are a match:
            alert ("You found a match!");
            //This replaces the images on the matched cards to "blank", so that
            //the user knows it's already been matched and won't click on it again:
            cards[cardOneId].setAttribute("src", "images/blank_square_100.png");
            cards[cardTwoId].setAttribute("src", "images/blank_square_100.png");
            // This puts the items in the cardsChosen array into the cardsWon array:
            cardsWon.push(cardsChosen);
            // This also puts the items in the cardsChosen array into the cardsFlipped array:
            cardsFlipped.push(cardsChosen);
        // This instructs what to do if the two chosen cards are not a match:    
        } else {
            // This flips the cards back over to reveal the pawprint image 
            // on the front of the cards:
            cards[cardOneId].setAttribute("src", "images/pawprints_clipart_100.png");
            cards[cardTwoId].setAttribute("src", "images/pawprints_clipart_100.png");
            // This puts the items in the cardsChosen array into the cardsFlipped array: 
            cardsFlipped.push(cardsChosen);
            // This alerts the user that the cards chosen were not a match:
            alert("Sorry.  Please try again.");
        }
        // This resets the arrays containing cardsChosen and cardsChosenID to empty;
        cardsChosen = [];
        cardsChosenId = [];
        // This counts the number of matches and displays it in the "Matches" <h3>:
        matchesDisplay.textContent = cardsWon.length;
        // This counts teh number of attempts and displays it in the "Attempts" <h3>:
        attemptsDisplay.textContent = cardsFlipped.length;
        // This counts the number of cards in the cardsWon array.  If it is 
        // deeply equal to the number of cards in the CardArray, then all of the 
        // possible matches have been made.  It displays to the user that they have found
        // all of the matches in the matchesDisplay <h3>:
        if (cardsWon.length === cardArray.length/2) {
            matchesDisplay.textContent = " Congratulations!  You've found all of the matches!";
        }
    }
    // This runs the createBoard function to begin the game:
    createBoard();
})



