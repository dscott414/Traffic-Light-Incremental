"use strict"

window.onload = () => {

const get = x => document.getElementById(x)
let game
let app
game = newGame()
game = loadData(JSON.parse(localStorage.getItem('trafficRemasteredSave')))
app = newVue()

let r = false
let loading = true

var loopID = window.setInterval(function() {
  loop(50)
}, 50)

function loop(ms) {
  if (ms > 50) {
    while (ms >= 0) {
      loop(50)
      ms -= 50
    }
    loading = false
  }
  
  let s = ms / 1000
  app.$data.game = game

  game.maxSpeed = Math.max(game.maxSpeed, game.speed)
  game.speedCap = (game.speedCap + nitroBonus() * s) * ((game.tab == 3) ? 0 : 1)
  game.speed = ((game.temperTantrum) ? game.speed + getSpeedRate() * s : 
                Math.max(Math.min(game.speed + getSpeedRate() * s, ((game.tab == 2) ? 1000 : game.speedCap)), 0) 
                * ((game.tab == 3) ? 0 : 1))
  game.impatience += getImpatienceRate() * s
  
  if (document.getElementById("save") != null) {
    game.sinceLastSave += s
  }
  
  if (game.sinceLastSave >= 30) {
    save()
  }
  
  if(!r && document.getElementById("redTraffic") != null && document.getElementById("progLog") != null) {
    renderButtons()
    for (let num in game.progress) {
      logMsg(progressData.msg[num], false)
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    r = true
  }
  
  checkMilestone()
  checkProg()
  
  if (game.milestones.includes(0) && game.tab == 1 && !game.temperTantrum) {
    buy("capUp")
    buy("speedUp")
  }
  if (game.seatbelts && game.tab == 2) {
    buy("brakes")
    buy("airbags")
  }
  
  if (game.temperTantrum && game.tab != 1) {
    enterLayer(4)
  }
  
  if (game.maxSpeed >= 3e10) {
    gameEnd(loopID)
  }
}

}