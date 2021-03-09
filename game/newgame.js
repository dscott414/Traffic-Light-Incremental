"use strict"

function newGame() {
  return {
    tab: 1,
    layerSubtab: [1, 1, 1],
    sinceLastSave: 0,
    speed: 0,
    maxSpeed: 0,
    nitro: false,
    rocketBooster: false,
    speedCap: 0.1,
    capUpgrades: 1,
    speedUpgrades: 1,
    brakes: 0,
    airbags: 1,
    seatbelts: false,
    testDummy: 1,
    milestones: [],
    progress: [],
    impatience: 0,
    roadRage: 1,
    traffic: 1,
    temperTantrum: false,
    gameOver: false
  }
}