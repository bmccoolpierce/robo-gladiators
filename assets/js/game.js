

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min +1 ) + min);
  return value;
};

// You can also log multiple values at once like this
// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// var enemy.names = ["Roberto", "Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;


//Game States
//"Win" - player robot has defeated all enemy robots
//     *Fight all enemy robots
//     *Defeat each enemy robot
//"lose" - player robot health has reached 0

//creates function
var fight = function (enemy) {

  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};





// executes function

//Function to start a new game
var startGame = function() {
  //reset player stats
 playerInfo.reset();
 
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40,60);
      // enemy.health = randomNumber(40,60);
      fight(pickedEnemyObj);
      //if we are not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if(storeConfirm) {
        shop();
        }
      }
    }
  
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

var endGame = function() {
  //if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + "."); 
  } else {
    window.alert ("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
  // window.alert("The game has now ended. Let's see how you did!");
};
var shop = function() {
//ask player what they would like to do
var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
//use switch to carry out action
switch (shopOptionPrompt) {

  //REFILL
  case "refill":
    case "REFILL":
    if (playerInfo.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    //increase health & decrease money
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;

    //UPGRADE
  case "upgrade":
    case "UPGRADE":
    if (playerInfo.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    //increase attack & decrease money
    playerInfo.attack = playerInfo.attack + 6;
    playerInfo.money = playerInfo.money - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;

    //LEAVE
  case "leave":
    case "LEAVE":
    window.alert("Leaving the store.") ;
    
    break;

    //INVALID RESPONSE
    default: 
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
}
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }
};

var enemyInfo = [
  {name: "Roberto",
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
startGame()


;