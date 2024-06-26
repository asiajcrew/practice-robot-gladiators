var playerName = window.prompt("What's your robot name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
    
        // SKIP
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                if (confirmSkip) {
                    if (playerMoney >= 10) {
                        window.alert(playerName + " has chosen to skip the fight.");
                        playerMoney = playerMoney - 10;
                        console.log("player money ", playerMoney)
                        break;
                    } else {
                        window.alert("You do not have enough money to skip this round")
                    }
                }
        }

        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert("Game over for " + enemyName);
                playerMoney = playerMoney + 20
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

        // Enemy attack
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining.");
        
            // Check player health
            if (playerHealth <= 0) {
                window.alert("Game over for " + playerName);
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health remaining");
            }
    }
}

var startGame = function() {
    // reset player stats before the first round
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i=0; i < enemyName.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var currentEnemy = enemyName[i];
            enemyHealth = 20
            fight(currentEnemy);
            // ask the player to shop in between eachround (if there are still more enemies to fight)
            if (playerHealth > 0 && i < enemyName.length -1) {
                var storeConfirm = window.confirm("Round 1 is over. Would you like to visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle.");
            break;
        }
    }
    endGame();
};

// function to end the entire game
var endGame = function() {  
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("Thanks for playing.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
        // restart the game
        startGame();
        } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

var shop = function() {
    var shopPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    // if (shopPrompt === REFILL || refill) {
    //     playerMoney - 10;
    //     playerHealth + 100;
    // } else if (shopPrompt === LEAVE || leave) {
    //     fight();
    // } else if (shopPrompt === UPGRADE || upgrade) {
    //     playerMoney - 10;
    //     playerAttack + 10;
    // } else {
    //     window.alert("Please make a valid choice");
    // }
};

startGame();

// change enemy health to 50
// change player health to 100
// change player money to 10