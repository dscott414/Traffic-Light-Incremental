"use strict"

function newVue() {
  return new Vue({
    el: "#app",
    data: {
      layerUnlocked: layerUnlocked,
      subtabUnlocked: subtabUnlocked,
      game: {},
      speedRate: getSpeedRate,
      buy: buy,
      getCost: getCost,
      milestoneData: milestoneData,
      getMilestone: getMilestone,
      impatienceRate: getImpatienceRate,
      save: save,
      loadData: loadData,
      enterLayer: enterLayer,
      disp: disp,
      logMsg: logMsg,
      renderButtons: renderButtons,
      gameEnd: gameEnd
    }
  })
}