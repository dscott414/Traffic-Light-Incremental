"use strict"

function getSpeedRate() {
  if (game.tab != 1) {
    if (game.speed <= 0 || game.tab == 3) {
      return 0
    } else {
      return -1 * (Math.log(game.speed + 1) / Math.log(1 + 1000 / Math.max(1, (10 * Math.pow(game.brakes, game.testDummy)))))
        * Math.pow(game.airbags, game.testDummy) / 5
    }
  }
  if (game.temperTantrum) {
    return game.speed
  }
  if (game.speed >= game.speedCap) {
    return 0
  } else if (game.rocketBooster) {
    return 20 * game.capUpgrades * game.speedUpgrades / 500
  } else {
    return ((game.speedCap / Math.max(game.speed, game.speedCap / 20)) - 1) * game.capUpgrades * game.speedUpgrades / 500
  }
}

function nitroBonus() {
  if (game.nitro && game.tab == 1) {
    return ((game.rocketBooster) ? Math.pow(getSpeedRate(), 2) : Math.sqrt(getSpeedRate()))
  } else {
    return 0
  }
}

function getCost(thing) {
  switch(thing) {
    case "capUp":
      if (game.capUpgrades <= 5) {
        return 0.1 * game.capUpgrades / 2
      } else if (game.capUpgrades <= 10) {
        return 0.25 * Math.pow(game.capUpgrades - 5, Math.sqrt(3)) + 0.05
      } else {
        return 0.1 * Math.pow(Math.sqrt(3), game.capUpgrades)
      }
    case "speedUp":
      return 0.15 * Math.pow(game.speedUpgrades, ((game.speedUpgrades <= 5) ? 1 : ((game.speedUpgrades2 <= 10) ? 2 : 2.5)))
    case "nitro":
      return 2.00;
    case "rocket":
      return 20.00;
    case "brakes":
      return Math.max(1000 - (Math.pow(1.5, game.brakes)), -0.000001)
    case "airbags":
      return Math.max(1000 - (Math.pow(2, 2 + game.airbags)), -0.0000001)
    case "seatbelts":
      return 950
    case "testDummy":
      return 700
    default:
    case "roadRage":
      return 10 * (Math.pow(game.roadRage, Math.sqrt(2)))
    case "traffic":
      return 100 * (Math.pow(game.traffic, 2))
    case "temperTantrum":
      return 10000
      break
  }
}

function buy(thing) {
  switch(thing) {
    case "capUp":
      if (game.speed >= getCost("capUp")) {
        game.speed = game.speed - getCost("capUp")
        game.capUpgrades++
        game.speedCap = game.speedCap * Math.pow(game.capUpgrades * Math.sqrt(2), Math.sqrt(2)) 
        / Math.pow((game.capUpgrades - 1) * Math.sqrt(2), Math.sqrt(2))
      }
      break
    case "speedUp":
      if (game.speed >= getCost("speedUp")) {
        game.speed = game.speed - getCost("speedUp")
        game.speedUpgrades++
      }
      break
    case "nitro":
      if (game.speed >= getCost("nitro") && !game.nitro) {
        game.speed -= getCost("nitro")
        game.nitro = true
      }
      break
    case "rocket":
      if (game.speed >= getCost("rocket") && !game.rocketBooster) {
        game.speed -= getCost("rocket")
        game.rocketBooster = true
      }
    case "brakes":
      if (game.speed <= getCost("brakes")) {
        if (!game.seatbelts) {
          game.speed = 1000
        }
        game.brakes++
      }
    case "airbags":
      if (game.speed <= getCost("airbags")) {
        if (!game.seatbelts) {
          game.speed = 1000
        }
        game.airbags++
      }
    case "seatbelts":
      if (game.speed <= getCost("seatbelts") && !game.seatbelts) {
        game.speed = 1000
        game.seatbelts = true
      }
    case "testDummy":
      if (game.speed <= getCost("testDummy")) {
        game.testDummy = 2
      }
    case "roadRage":
      if (game.impatience >= getCost("roadRage")) {
        game.impatience -= getCost("roadRage")
        game.roadRage++
      }
    case "traffic":
      if (game.impatience >= getCost("traffic")) {
        game.impatience -= getCost("traffic")
        game.traffic++
      }
    case "temperTantrum":
      if (game.impatience >= getCost("temperTantrum")) {
        game.impatience -= getCost("temperTantrum")
        game.temperTantrum = true
      }
    default:
      break
  }
}