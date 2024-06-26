var playerName = window.prompt("What's your robot name?");
var playerHealth = 100;
var playerAttack = 60;
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

        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage)
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
        var damage = randomNumber(enemyAttack -3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
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
    playerAttack = 50;
    playerMoney = 100;
    for (var i=0; i < enemyName.length; i++) {
        if (playerHealth > 0) {
            var currentRound = i + 1
            window.alert("Welcome to Robot Gladiators! Round " + currentRound);
            var currentEnemy = enemyName[i];
            enemyHealth = randomNumber(40, 60);
            fight(currentEnemy);
            // ask the player to shop in between eachround (if there are still more enemies to fight)
            if (playerHealth > 0 && i < enemyName.length -1) {
                var storeConfirm = window.confirm("Round " + currentRound + " is over. Would you like to visit the store before the next round?");
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
    switch (shopPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for $7.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money for this transaction.");
            }
            break;

        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for $7.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money for this transaction.");
            }
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("Please enter a valid option.");
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

startGame();

// change enemy health to 50
// change player health to 100
// change player money to 50
// change player attack to 10