"use strict"

function save() {
  localStorage.setItem('trafficRemasteredSave', JSON.stringify(game))
  game.sinceLastSave = 0
}

function loadData(saveData) {
  if (saveData != null) {
    let game = newGame()
    for (let thing in game) {
      game[thing]=saveData[thing]
    }
    return game
  } else {
    return newGame()
  }
}


function copyStringToClipboard(str) {
  var el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style = {
    position: "absolute",
    left: "0px",
    top: "0px",
    color: "transparent"
  }
  document.body.appendChild(el)
  copyToClipboard(el)
  document.body.removeChild(el)
  logMsg("Save copied to clipboard.", true)
}

function copyToClipboard(el) {
  el = typeof el === "string" ? document.querySelector(el) : el
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var editable = el.contentEditable
    var readOnly = el.readOnly
    el.contentEditable = true
    el.readOnly = true
    var range = document.createRange()
    range.selectNodeContents(el)
    var selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    el.setSelectionRange(0, 999999)
    el.contentEditable = editable
    el.readOnly = readOnly
  } else {
    el.select();
  }
  document.execCommand("copy");
}