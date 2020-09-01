var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"Win" - player robot has defeated all enemy robots
//     *Fight all enemy robots
//     *Defeat each enemy robot
//"lose" - player robot health has reached 0

//creates function
var fight = function(enemyName) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {enemyHealth + enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " +enemyName + " now has " + enemyHealth + " health remaining."
        );

       

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.

  console.log(

      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
        //remove player health by subtracting the amount set in enemyAttack
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

         // Check enemy health
         if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
      } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
//check player health

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has" + playerHealth + " health left.");
        }

        //if player chooses skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if(confirmSkip){
        window.alert(playerName + " has chosen to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    } else { 
      fight();
    }
  }



//     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//   enemyHealth = enemyHealth - playerAttack;

//     // Log a resulting message to the console so we know that it worked.

//   console.log(
//       playerName + " attacked " + enemyNames [] + ". " + enemyNames [] + " now has " + enemyHealth + " health remaining."
//   );
//     // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

//   playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so we know that it worked.

//     console.log(
//     enemyNames [] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//     // put new code under this
// console.log(
//     playerName + " attacked " + enemyNames [] + ". " + enemyNames [] + " now has " + enemyHealth + " health remaining."
//   );
  
//   // check enemy's health
//   if (enemyHealth <= 0) {
//     window.alert(enemyNames [] + " has died!");
//   } 
//   else {
//     window.alert(enemyNames [] + " still has " + enemyHealth + " health left.");
//   }

//   // put new code under this
// console.log(enemyNames [] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// // check player's health
// if (playerHealth <= 0) {
//   window.alert(playerName + " has died!");
// } 
// else {
//   window.alert(playerName + " still has " + playerHealth + " health left.");
// }
  };

  
// executes function


//fight(); replaced by below code
for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
