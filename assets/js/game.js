var playerName = window.prompt("What's your robot name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("welcome to Robot Gladiators");

    // Player attack
    enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");

    // Enemy attack
    playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining.");

    // Check enemy health
    if (enemyHealth <= 0) {
        window.alert("Game over for " + enemyName);
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Check player health
    if (playerHealth <= 0) {
        window.alert("Game over for " + playerName)
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining");
    }

}

fight();