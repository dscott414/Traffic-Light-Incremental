"use strict"

const progressData = {
    checkpoint: [
      () => game.speed>=0,
      () => game.capUpgrades>=2,
      () => game.speedUpgrades>=2,
      () => game.nitro,
      () => game.milestones.includes(0),
      () => game.milestones.includes(1),
      () => game.tab == 2,
      () => game.brakes >= 1,
      () => game.airbags >= 2,
      () => game.seatbelts,
      () => game.testDummy == 2,
      () => game.speed==0 && game.tab == 2,
      () => game.tab == 3,
      () => game.roadRage >= 2,
      () => game.traffic >= 2,
      () => game.temperTantrum,
      () => game.speed>=299792458
    ],
    msg: [
      "You find yourself in a car on a long stretch of road. There is a singular traffic light above you, currently lit green. "
      + "In the car, the dashboard is bare except for several buttons. You try pushing them, but nothing seems to happen. "
      + "You press the gas pedal.",
      "The car feels sleeker. Are you picking up speed?",
      "The engine seems to purr slightly louder.",
      "The car leaps ahead. You can tell that the car is now able to go much faster.",
      "The car is now barrelling down the highway. Interestingly enough, you appear to be going nowhere whatsoever.",
      "The traffic light that is somehow still above you is now flickering yellow. A corresponding button is now available on your dashboard.",
      "The car suddenly rockets up to a speed you didn't think was possible. The gas pedal has now disappeared. With no better options, you hit the brakes.",
      "Pumping the brakes now works much more efficiently.",
      "You don't know how airbags are slowing me down, but they are.",
      "Oh hey, a seatbelt! Now you won't be jerking around!",
      "You pass a billboard advertising the safety of your car using a crash test dummy. You feel even better about slamming on the brakes",
      "The car has now come back to a halt. Above you, the traffic light flickers red. A corresponding button is now available on your dashboard.",
      "You start to grow impatient, you're not moving.",
      "Your impatience blossoms into rage.",
      "You begin hallucinating that there is intense traffic to cope with the rage. It's ineffective.",
      "You throw a temper tantrum and start smashing the buttons. Suddenly, you start moving... very fast!",
      "You have reached the speed of light! Wait, what is that?"
    ]
}

function checkProg() {
  for (let i = 0; i < progressData.checkpoint.length; i++) {
    if (!game.progress.includes(i) && progressData.checkpoint[i]()) {
      game.progress.push(i)
      logMsg(progressData.msg[i], true)
      renderButtons()
    }
  }
}