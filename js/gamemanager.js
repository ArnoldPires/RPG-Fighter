let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "elementalist":
        player = new Player(classType, 80, 200, 40, 90, 70);
        break;
      case "engineer":
        player = new Player(classType, 180, 0, 80, 100, 90);
        break;
      case "guardian":
        player = new Player(classType, 80, 180, 200, 110, 70);
        break;
      case "mesmer":
        player = new Player(classType, 95, 200, 50, 60, 65);
        break;
      case "necromancer":
        player = new Player(classType, 250, 200, 90, 40, 30);
        break;
      case "ranger":
        player = new Player(classType, 180, 30, 180, 200, 120);
        break;
      case "revenant":
        player = new Player(classType, 170, 20, 190, 100, 110);
        break;
      case "thief":
        player = new Player(classType, 80, 0, 120, 210, 220);
        break;
      case "warrior":
        player = new Player(classType, 250, 0, 250, 50, 40);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="images/heros/' +
    classType.toLowerCase() + '.png" class="images/heros"><div><h3>' + classType
    + '</h3><p class="health-player">Health: ' + player.health +
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
    let enemy00 = new Enemy("centaur", 170, 0, 100, 100, 100);
    let enemy01 = new Enemy("demon", 250, 0, 150, 80, 130);
    let enemy02 = new Enemy("djinn", 100, 200, 80, 70, 90);
    let enemy03 = new Enemy("dragon", 300, 30, 100, 100, 90);
    let enemy04 = new Enemy("ettin", 130, 0, 120, 70, 70);
    let enemy05 = new Enemy("grawl", 100, 40, 110, 80, 80);
    let enemy06 = new Enemy("harpy", 80, 0, 150, 80, 150);
    let enemy07 = new Enemy("hydra", 250, 60, 200, 50, 70);
    let enemy08 = new Enemy("jotun", 200, 0, 200, 60, 70);
    let enemy09 = new Enemy("krait", 80, 200, 120, 180, 160);
    let enemy10 = new Enemy("ogre", 200, 0, 250, 80, 150);
    let enemy11 = new Enemy("troll", 250, 0, 250, 60, 80);
    let enemy12 = new Enemy("undead", 180, 170, 250, 50, 50);
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
