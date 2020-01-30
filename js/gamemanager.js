let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "elementalist":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "engineer":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "guardian":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "mesmer":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "necromancer":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "ranger":
        player = new Player(classType, 200, 0, 50, 200, 50);
        break;
      case "revenant":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "thief":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="images/heros/' +
    classType.toLowerCase() + '.png" class="images/heros"><div><h3>' + classType
    + '</h3><p>Health: ' + player.health +
    '</p><p>Mana: ' + player.mana +
    '</p><p>strength: ' + player.strength +
    '</p><p>agility: ' + player.agility +
    '</p><p>speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Defeat your opponent</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    //Create enemy
    let enemy00 = new Enemy("centaur", 100, 0, 50, 100, 10);
    let enemy01 = new Enemy("demon", 100, 0, 50, 100, 100);
    let enemy02 = new Enemy("djinn", 100, 0, 50, 100, 100);
    let enemy03 = new Enemy("dragon", 100, 0, 50, 100, 100);
    let enemy04 = new Enemy("ettin", 100, 0, 50, 100, 100);
    let enemy05 = new Enemy("grawl", 100, 0, 50, 100, 100);
    let enemy06 = new Enemy("harpy", 100, 0, 50, 100, 100);
    let enemy07 = new Enemy("hydra", 100, 0, 50, 100, 100);
    let enemy08 = new Enemy("jotun", 100, 0, 50, 100, 100);
    let enemy09 = new Enemy("krait", 100, 0, 50, 100, 100);
    let enemy10 = new Enemy("ogre", 100, 0, 50, 100, 100);
    let enemy11 = new Enemy("troll", 100, 0, 50, 100, 100);
    let enemy12 = new Enemy("undead", 100, 0, 50, 100, 100);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(13));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
      case 3:
        enemy = enemy03;
        break;
      case 4:
        enemy = enemy04;
        break;
      case 5:
        enemy = enemy05;
        break;
      case 6:
        enemy = enemy06;
        break;
      case 7:
        enemy = enemy07;
        break;
      case 8:
        enemy = enemy08;
        break;
      case 9:
        enemy = enemy09;
        break;
      case 10:
        enemy = enemy10;
        break;
      case 11:
        enemy = enemy11;
        break;
      case 12:
        enemy = enemy12;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="images/enemies/' +
    enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="images/heros"><div><h3>' +
    enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' +
    enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' +
    enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
