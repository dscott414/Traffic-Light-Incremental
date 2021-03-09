"use strict"

const milestoneData = {
    milestone: [
      () => game.speedCap>=44.704,
      () => game.maxSpeed>=100.00,
      () => game.maxSpeed>=3e8
    ],
    name: [
      "Zooming Along",
      "Triple Digits",
      "Break the Laws of Physics"
    ],
    tooltip: [
      "Have a speed cap of 44.704 m/s (100 mph)",
      "Reach a speed of 100 m/s",
      "Reach the speed of light (3e8 m/s)"
    ],
  reward: [
    "Autobuy Speed Upgrades",
    "Unlock Yellow",
    "Complete the game"
  ]
}

function getMilestone(field, x) {
  switch(field) {
    case "milestone":
      return milestoneData.milestone[x]()
    case "name":
      return milestoneData.name[x]
    case "tooltip":
      return milestoneData.tooltip[x]
    case "reward":
      return milestoneData.reward[x]
    default:
      return 0
  }
}

function checkMilestone() {
  for (let i = 0; i < milestoneData.milestone.length; i++) {
    if (!game.milestones.includes(i) && milestoneData.milestone[i]()) {
      game.milestones.push(i)
      logMsg("Milestone Unlocked: " + getMilestone("name", i), true)
      renderButtons()
    }
  }
}