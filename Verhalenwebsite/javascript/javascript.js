/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

//-----------------------------------------------------------------------
//Microinteractie 1: TAG BASED SEARCH
//-----------------------------------------------------------------------
//Declareren van de verschillende DOM elementen
var buttonOudste = document.querySelector('.buttonNieuw');
var buttonNieuw = document.querySelector('.buttonOudste');
var buttonTrending = document.querySelector('.buttonTrending');
var buttonComments = document.querySelector('.buttonComments');
var buttonLang = document.querySelector('.buttonLang');
var buttonKort = document.querySelector('.buttonKort');

//Button nieuw, eventlistener en function
var classToggle = function () {
    buttonNieuw.classList.toggle('selected');
};

//voegt event toe aan de button
buttonNieuw.addEventListener('click', classToggle);

//Button oudste, eventlistener en function
var classToggle = function () {
    buttonOudste.classList.toggle('selected');
};

//voegt event toe aan de button
buttonOudste.addEventListener('click', classToggle);

//Button trending, eventlistener en function
var classToggle = function () {
    buttonTrending.classList.toggle('selected');
};

//voegt event toe aan de button
buttonTrending.addEventListener('click', classToggle);

//Button comments, eventlistener en function
var classToggle = function () {
    buttonComments.classList.toggle('selected');
};

//voegt event toe aan de button
buttonComments.addEventListener('click', classToggle);

//Button lang, eventlistener en function
var classToggle = function () {
    buttonLang.classList.toggle('selected');
};

//voegt event toe aan de button
buttonLang.addEventListener('click', classToggle);

//Button kort, eventlistener en function
var classToggle = function () {
    buttonKort.classList.toggle('selected');
};

//voegt event toe aan de button
buttonKort.addEventListener('click', classToggle);

//-----------------------------------------------------------------------
//microinteractie 2: LIKE KNOP
//-----------------------------------------------------------------------
//Het declareren van de DOM elementen
var likeButton = document.querySelector('#likebutton');
var likeCounter = document.querySelector('#likecounter'), count = 0;
//de counter staat op het begin op 0
likeButton.onclick = function () {
    count += 1; //steeds +1 op de counter
    likeCounter.innerHTML = count; //print het in de html (in <span> element)
};

//de functie die de classes veranderd
function likeToggle() {
    likeButton.classList.toggle('likePulse');
    likeButton.classList.remove('fa-heart-o');
    likeButton.classList.add('fa-heart');
}

//een event wordt gekoppeld aan het hartje
likeButton.addEventListener('click', likeToggle);

