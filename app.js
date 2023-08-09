'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const img1 = document.getElementById('img1')


function mudarCor (){
    forma1.classList.toggle('roxo')
}

function mudarForma (){
    forma2.classList.toggle('circulo')
}

function desaparecer (){
    forma3.classList.toggle('fade')
}

function movimentar (){
    forma4.classList.toggle('movimento')
}

function girar (){
    forma5.classList.toggle('girar')
}

function bordear (){
    forma6.classList.toggle('borda')
}

function mover (){
    forma7.classList.toggle('lados')
}

function mudarImg (){
    img1.classList.toggle('sunghoon2')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
img1.addEventListener('click', mudarImg)
forma3.addEventListener('click', desaparecer)
forma4.addEventListener('click', movimentar)
forma5.addEventListener('click', girar)
forma6.addEventListener('click', bordear)
forma7.addEventListener('click', mover)