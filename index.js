var setadireita = window.document.getElementById("setadireita")
var iphone1 = window.document.getElementById("iphone1")
var iphone2 =  window.document.getElementById("iphone2")
var setaesquerda =  window.document.getElementById("setaesquerda")
var iphone3 =  window.document.getElementById("iphone3")
function deslizarparadireita(){
    iphone1.style="diplay:none"
    iphone2.style="display:flex"
    iphone3.style="display:flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex; margin-top=50px"
}

function deslizarparaesquerda(){
    iphone1.style="diplay:flex"
    iphone2.style="display:none"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top=50px"
}