function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    const friend_select = document.getElementById('friends');
    for (let i = 0; i < friend_select.options.length; i++) {
        if (friend_select.options[i].selected) {
            friends.push(friend_select.options[i].value);
        }
    }


    // Display user's selection in Developer Tools --> Console.
    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE
    let cards = []; // Initialize to empty

    // For each selected friend
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];

        // For each fruit
        for (let j = 0; j < fruits.length; j++) {
            const fruit = fruits[j];

            // Create two cards for the friend-fruit combination
            const card1 = `${fruit}_${friend}.png`;
            const card2 = `${fruit}_${friend}.png`;

            // Add the two cards to the cards array
            cards.push(card1);
            cards.push(card2);
        }
    }

    // Shuffle the cards array to randomize the order of cards
    cards = shuffleArray(cards);

    // Display the finalized, randomized list of card names in Developer Tools --> Console.
    console.log(cards);         




    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // Create a 2D array to represent the game board
    const game_board = [];
    for (let i = 0; i < num_rows; i++) {
        game_board[i] = [];
        for (let j = 0; j < num_cols; j++) {
            game_board[i][j] = cards.pop(); // Get a card from the shuffled deck
        }
    }
    console.log(game_board);    

    // Prepare the HTML string to represent the game board
    // Use a table for layout
    result_str = `<table border='1' style='border-collapse: collapse;'>`;

    for (let i = 0; i < num_rows; i++) {
        result_str += `<tr>`; // Start a new row
        for (let j = 0; j < num_cols; j++) {
            const card = game_board[i][j];
            result_str += `
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/${card}' alt='${card}' style='width: 100px; height: 100px;'><br>
                    ${card}
                </td>
            `; // Add a cell with the card image and name
        }
        result_str += `</tr>`; // End the row
    }

    result_str += `</table>`; // End the table

    console.log(result_str); // Display the HTML string in Developer Tools --> Console.         


    // You will need to rewrite the value of this result_str (String).

    
    let result_str = `
        <table border='1' style='border-collapse: collapse;'>
            <tr>    
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/apple_brandon.png' alt='apple_brandon.png' style='width: 100px; height: 100px;'><br>
                    apple_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/banana_brandon.png' alt='banana_brandon.png' style='width: 100px; height: 100px;'><br>
                    banana_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/kiwi_brandon.png' alt='kiwi_brandon.png' style='width: 100px; height: 100px;'><br>
                    kiwi_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/orange_brandon.png' alt='orange_brandon.png' style='width: 100px; height: 100px;'><br>
                    orange_brandon.png
                </td>
            </tr>
            <tr>    
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/apple_brandon.png' alt='apple_brandon.png' style='width: 100px; height: 100px;'><br>
                    apple_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/banana_brandon.png' alt='banana_brandon.png' style='width: 100px; height: 100px;'><br>
                    banana_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/kiwi_brandon.png' alt='kiwi_brandon.png' style='width: 100px; height: 100px;'><br>
                    kiwi_brandon.png
                </td>
                <td style='padding: 10px; text-align: center;'>
                    <img src='images/orange_brandon.png' alt='orange_brandon.png' style='width: 100px; height: 100px;'><br>
                    orange_brandon.png
                </td>
            </tr>
        </table>
        <br>
        
    `;
    

    console.log(result_str); // Display the HTML string in Developer Tools --> Console.
    

    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}