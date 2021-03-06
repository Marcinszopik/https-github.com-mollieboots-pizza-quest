import { Player } from './../src/player.js';
import { Monster } from './../src/monsters.js';

export function Game(level, turns, result, player, monster) {
  this.level = 0;
  this.turns = 0;
  this.result = result;
  this.player = player;
  this.monster = monster;
}

Game.prototype.checkLevel = function (level, monsters) {
    for (i = 0; let i <= monsters.length; i++) {
        if (monsters[i].level == level) {
            return monsters[i];
        }
    }
}