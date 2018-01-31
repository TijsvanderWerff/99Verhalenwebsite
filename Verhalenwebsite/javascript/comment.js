/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

//-----------------------------------------------------------------------
//microinteractie 3: PLAATSEN VAN REACTIE
//-----------------------------------------------------------------------
// Bron voor de timingdelay: https://www.w3schools.com/js/js_timing.asp
//Het declaren van de DOM elementen
var commentList = document.querySelector('.commentListHide');

var button = document.querySelector('.plaatsButton');
button.addEventListener('click', function() {
 //Het toevoegen van de class loading
    button.classList.add('loading');

    // Hieronder wordt de klas success toegevoegd en de class commentList
    // Hierdoor wordt de comment zichtbaar op de pagina
  setTimeout(function() {
      button.classList.remove('loading');
      button.classList.add('success');

    setTimeout(function() {
        commentList.classList.add('commentList');
        button.classList.remove('success');
    }, 2000); //een delay zodat het de microinteractie goed getimed is
  }, 3000);
});
