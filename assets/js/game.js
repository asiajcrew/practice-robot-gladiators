var playerName = window.prompt("What's your robot name?");
var playerHealth = 10;
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

for (var i=0; i < enemyName.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    } else {
        window.alert("You have lost your robot in battle. Game over!");
        break;
    }
    var currentEnemy = enemyName[i];
    enemyHealth = 20
    fight(currentEnemy);
}