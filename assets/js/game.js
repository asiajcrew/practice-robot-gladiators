// Defined fight function
var fight = function(enemy) {
    var isPlayerTurn = true;
        if (Math.random() > 0.5) {
            isPlayerTurn = false;
        }

    while(player.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            };
        var damage = randomNumber(player.attack - 3, player.attack);
        enemy.health = Math.max(0, enemy.health - damage)
        console.log(player.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining.");
        
            // Check enemy health
            if (enemy.health <= 0) {
                window.alert("Game over for " + enemy.name);
                player.money = player.money + 20
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            };
        } else {
            // Enemy attack
            var damage = randomNumber(enemy.attack -3, enemy.attack);
            player.health = Math.max(0, player.health - damage);
            console.log(enemy.name + " attacked " + player.name + "." + player.name + " now has " + player.health + " health remaining.");
            
                // Check player health
                if (player.health <= 0) {
                    window.alert("Game over for " + player.name);
                    break;
                }
                else {
                    window.alert(player.name + " still has " + player.health + " health remaining");
                }
        }
        // Reverses order so that it is the opposite person's turn after initial attack
        isPlayerTurn = !isPlayerTurn
    }
}

// random number generator
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

// return player's robot name. Used in Player info object
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }
    return name;
}

// Player info
var player = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    // refill health for shop function
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for $7.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You do not have enough money for this transaction.");
        }
    },
    // upgrade attack for shop function
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You do not have enough money for this transaction.");
        }
    }
}

// Enemy info
var enemy = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// Game loop & shop confirmation
var startGame = function() {
    // reset player stats before the first round
    player.reset();

    for (var i=0; i < enemy.length; i++) {
        if (player.health > 0) {
            var currentRound = i + 1
            window.alert("Welcome to Robot Gladiators! Round " + currentRound);
            var currentEnemyObj = enemy[i];
            currentEnemyObj.health = randomNumber(40, 60);
            fight(currentEnemyObj);
            // ask the player to shop in between eachround (if there are still more enemies to fight)
            if (player.health > 0 && i < enemy.length -1) {
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

// Confirmation to fight or skip round
var fightOrSkip = function () {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();
    if (!promptFight) {
        // ^^Can also be written as "if (promptFight === "" || promptFight === null)
        window.alert("Please input a valid answer. Try again");
        return fightOrSkip();
    } else if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                if (player.money >= 10) {
                    window.alert(player.name + " has chosen to skip the fight.");
                    player.money = player.money - 10;
                    return true;
                    shop();
                } else {
                    window.alert("You do not have enough money to skip this round")
                }
            } else {
                return false;
            }
    }
};

// shop options
var shop = function() {
    var shopPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter the number '1' to REFILL, '2' to UPGRADE', or '3' to LEAVE' the shop.");
    shopPrompt = parseInt(shopPrompt);
    switch (shopPrompt) {
        case 1:
            player.refillHealth();
            break;

        case 2:
            player.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("Please enter a valid option.");
            shop();
            break;
    }
};

// function to end the entire game
var endGame = function() {  
    // if player is still alive, player wins!
    if (player.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + player.money + ".");
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

startGame();