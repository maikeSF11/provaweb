var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var bruna =  window.document.getElementById("bruna")
var setaesquerda =  window.document.getElementById("setaesquerda")
var samantha =  window.document.getElementById("samantha")
function deslizarparadireita(){
    leonardo.style="diplay:none"
    bruna.style="display:flex"
    samantha.style="display:flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex; margin-top=50px"
}

function deslizarparaesquerda(){
    leonardo.style="diplay:flex"
    bruna.style="display:none"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top=50px"
}