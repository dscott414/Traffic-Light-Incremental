"use strict"

function disp(x) {
  if (Math.abs(x) <= 0.0001) {
    return 0
  } else if (Math.abs(x) <= 0.009) {
    return "<0.01"
  } else {
    return x.toFixed(2)
  }
}

function layerUnlocked(x) {
  switch(x) {
    case 1:
      return !game.milestones.includes(1)
    case 2:
      return game.milestones.includes(1) && game.speed >= 0.01
    case 3:
      return game.tab == 2 && game.speed == 0
    case 4:
      return game.temperTantrum
    default:
      return false
  }
}

function subtabUnlocked(x,y) {
  switch(x) {
    case 1:
      return y == 1 || game.milestones.includes(0)
    case 2:
      return ((layerUnlocked(2) && y == 1) || game.milestones.includes(1))
    case 3:
      return ((layerUnlocked(3) && y == 1) || game.milestones.includes(2))
    default:
      return false
  }
}

function enterLayer(x) {
  if (layerUnlocked(x) && game.tab != x) {
    switch(x) {
      case 1:
        game.tab = 1
        game.speed = 0
        renderButtons()
        break
      case 2:
        game.tab = 2
        game.speed = 1000
        renderButtons()
        break
      case 3:
        game.tab = 3
        game.speed = -1
        renderButtons()
        break
      case 4:
        game.tab = 1
        game.speed = 1
        renderButtons()
      default:
        break
    }
  }
  var elmnt = document.getElementById("redTraffic")
  elmnt.scrollIntoView(false)
}

function renderButtons() {
  let colors = ["", "green", "yellow", "red"]
  for (let i = 1; i < colors.length; i++) {
    let currButton = document.getElementById(colors[i] +"Traffic")
    if (game.tab == i) {
      currButton.classList.remove("noClick")
      currButton.classList.add("litUp")
    } else if (!layerUnlocked(i)) {
      currButton.classList.add("noClick")
      currButton.classList.remove("litUp")
    } else {
      currButton.classList.remove("noClick", "litUp")
    }
  }
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function gameEnd(loopID) {
  game.gameOver = true
  window.clearInterval(loopID)
}