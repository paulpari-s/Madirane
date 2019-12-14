$(document).ready(function() {

  $(window).scroll(function () {
       //if you hard code, then use console
       //.log to determine when you want the
       //nav bar to stick.
       console.log($(window).scrollTop())
     if ($(window).scrollTop() > 590) {
       $('#nav_bar').addClass('navbar-fixed');
       $('#nav_bar').removeClass('navbar-none');
     }
     if ($(window).scrollTop() < 591) {
       $('#nav_bar').removeClass('navbar-fixed');
       $('#nav_bar').addClass('navbar-none');
     }
   });
 });
