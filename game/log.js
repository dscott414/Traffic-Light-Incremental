"use strict"

function logMsg(str, transition) {
  var node = document.createElement("p")
  var entry = document.createTextNode(str)
  node.appendChild(entry)
  node.className = "progEntry"
  if (transition) {
    node.style.animation = "progEntry 3s"
    document.getElementById("progLog").appendChild(node)
    node.scrollIntoView({ behavior: 'smooth' })
  } else {
    node.style.animation = "progEntry 0s"
    document.getElementById("progLog").appendChild(node)
    node.scrollIntoView(false)
  }
}