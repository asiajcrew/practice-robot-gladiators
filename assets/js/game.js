var playerName = window.prompt("What's your robot name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    if (promptFight === "fight" || promptFight==="FIGHT") {
        // Player attack
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert("Game over for " + enemyName);
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

        // Enemy attack
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining.");
        
            // Check player health
            if (playerHealth <= 0) {
                window.alert("Game over for " + playerName)
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health remaining");
            }

    // SKIP
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight.");
                playerMoney = playerMoney - 2;
            } else {
                fight();
            }
    
    // invalid entry
    } else {
        window.alert("You need to choose a valid option. Try again.");
        fight();
    }
}

for (var i=0; i < enemyName.length; i++) {
    fight(enemyName[i]);
}