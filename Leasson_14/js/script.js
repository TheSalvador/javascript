$(document).ready(function () {
    'use strict';
    $('[href="#sheldure"]').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown("slow");
    });
    $('.main_btn').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown("slow");
    });
    $('.main_btna').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown("slow");
     });
     $('.close').on('click', () => {
         $('.overlay').fadeToggle('slow');
         $('.modal').slideUp("slow");
     });
     $('img').on('click', ()=> {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown("slow");
     });
 });