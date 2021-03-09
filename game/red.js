"use strict"

function getImpatienceRate() {
  if (game.tab != 3) {
    return 0
  } else {
    return Math.pow(1 * game.roadRage, game.traffic)
  }
}