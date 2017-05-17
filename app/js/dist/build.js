(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//window.jquery = $ =  require('jquery');
//var tether = require('tether')
//var bootstrap = require('bootstrap/dist/js/bootstrap');



$(document).ready(function(){

console.log('test1');


//Owl carousel setup
var owlWidth = $('.wrapper').width();
var owlHeight = owlWidth * .563;


$('.owl-carousel').owlCarousel({
        items:1,
        nav:true,
        center:true,
        merge:true,
        loop:true,
        margin:1,
        video:true,
        videoWidth: 320,
        videoHeight: 180,
        responsive:{
            480:{
                items:1,
                videoWidth: owlWidth,
                videoHeight: owlHeight,
            },
            600:{
                items:1,
                videoWidth: owlWidth,
                videoHeight: owlHeight,
            }
        }
    });


//spotify width controller
var project = 'lr'

function spotScale () {
  var width = $('#music').find('.nav').width() - 40;

  $('.lr_spot').css('width', width);
  $('.bfts_spot').css('width', width);
  $('.tbm_spot').css('width', width);
};


//band theme changer

function musicSelect() {
  var newProject = $(this).attr('data-alt');

  function themeChange(project, color, color2){
      $('.theme_control').css('background-color', color);
      $('.nav_parent').css('background-color', color2);
      $('.nav_dropdown').css('background-color', color2);
      $('.related_links').find('.card').css('background-color', color2);
      $('.' + project + '_playlist').trigger('click');
  };

  if (project !== newProject) {
    project = newProject;
    if (project == 'bfts') {
      themeChange('bfts', '#8F96A5', '#242B3B');
      $('.facebook_link').attr('href', 'https://www.facebook.com/builtforthesea/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/channel/UC0EY8MEuhHLzaV6Vd9U7dZg/videos');
      $('.related_links').find('h1').css('font-family', "orator-std");
      $('.logo_lr').css('display', 'none');
      $('.logo_bfts').css('display', 'block');
      $('.logo_tbm').css('display', 'none');
      $('.header_logo').css('font-family', 'orator-std');
      $('.header_logo').fadeOut().html('Built For The Sea').fadeIn();
      $('.header').css('background-image', 'url(/images/header_01.jpg)');
    } else if (project == 'lr') {
      themeChange('lr', '#A9E1ED', '#238BA1');
      $('.facebook_link').attr('href', 'https://www.facebook.com/LiaRoseOfficial/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/user/liarosewastaken/videos');
      $('.related_links').find('h1').css('font-family', "viktor-script");
      $('.logo_lr').css('display', 'block');
      $('.logo_bfts').css('display', 'none');
      $('.logo_tbm').css('display', 'none');
      $('.header_logo').css('font-family', 'viktor-script');
      $('.header_logo').fadeOut().html('Lia Rose').fadeIn();
      $('.header').css('background-image', 'url(/images/header_01.jpg)');
    } else if (project == 'tbm') {
      themeChange('tbm', '#EDC7B5', '#AC6E51');
      $('.facebook_link').attr('href', 'https://www.facebook.com/thebrushfootmigration/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/channel/UCXO0UxITbdHVl0yFfzi2sxQ');
      $('.related_links').find('h1').css('font-family', "verveine");
      $('.logo_lr').css('display', 'none');
      $('.logo_bfts').css('display', 'none');
      $('.logo_tbm').css('display', 'block');
      $('.header_logo').css('font-family', 'verveine');
      $('.header_logo').fadeOut().html('The Brushfoot Migration').fadeIn()
      $('.header').css('background-image', 'url(/images/header_tbm_01.jpg)');
    }
  } else {
    console.log(project);
  }
};

$('.item').on('click', musicSelect);
$('.sub_music').on('click', musicSelect);
$('.dropdown-item').on('click', musicSelect);
$('.band_select').on('click', musicSelect);


//Spotify width event triggers
$(window).on('load', spotScale());
$(window).resize(function(){
  spotScale();
});



//Navigation scroll on click
  $(document).on('click', '.scrollDown', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500, 'swing');
});







//main jquery doc close
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmsgRHJpdmUgT1NYL1dlYiBEZXZlbG9wbWVudC9MaWEtbXVzaWMtYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Wb2x1bWVzL1dvcmsgRHJpdmUgT1NYL1dlYiBEZXZlbG9wbWVudC9MaWEtbXVzaWMtYm9vdHN0cmFwL2FwcC9qcy9mYWtlXzU2NTMzMjQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy93aW5kb3cuanF1ZXJ5ID0gJCA9ICByZXF1aXJlKCdqcXVlcnknKTtcbi8vdmFyIHRldGhlciA9IHJlcXVpcmUoJ3RldGhlcicpXG4vL3ZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAnKTtcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbmNvbnNvbGUubG9nKCd0ZXN0MScpO1xuXG5cbi8vT3dsIGNhcm91c2VsIHNldHVwXG52YXIgb3dsV2lkdGggPSAkKCcud3JhcHBlcicpLndpZHRoKCk7XG52YXIgb3dsSGVpZ2h0ID0gb3dsV2lkdGggKiAuNTYzO1xuXG5cbiQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zOjEsXG4gICAgICAgIG5hdjp0cnVlLFxuICAgICAgICBjZW50ZXI6dHJ1ZSxcbiAgICAgICAgbWVyZ2U6dHJ1ZSxcbiAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICBtYXJnaW46MSxcbiAgICAgICAgdmlkZW86dHJ1ZSxcbiAgICAgICAgdmlkZW9XaWR0aDogMzIwLFxuICAgICAgICB2aWRlb0hlaWdodDogMTgwLFxuICAgICAgICByZXNwb25zaXZlOntcbiAgICAgICAgICAgIDQ4MDp7XG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgICAgICAgICB2aWRlb1dpZHRoOiBvd2xXaWR0aCxcbiAgICAgICAgICAgICAgICB2aWRlb0hlaWdodDogb3dsSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDp7XG4gICAgICAgICAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgICAgICAgICB2aWRlb1dpZHRoOiBvd2xXaWR0aCxcbiAgICAgICAgICAgICAgICB2aWRlb0hlaWdodDogb3dsSGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy9zcG90aWZ5IHdpZHRoIGNvbnRyb2xsZXJcbnZhciBwcm9qZWN0ID0gJ2xyJ1xuXG5mdW5jdGlvbiBzcG90U2NhbGUgKCkge1xuICB2YXIgd2lkdGggPSAkKCcjbXVzaWMnKS5maW5kKCcubmF2Jykud2lkdGgoKSAtIDQwO1xuXG4gICQoJy5scl9zcG90JykuY3NzKCd3aWR0aCcsIHdpZHRoKTtcbiAgJCgnLmJmdHNfc3BvdCcpLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gICQoJy50Ym1fc3BvdCcpLmNzcygnd2lkdGgnLCB3aWR0aCk7XG59O1xuXG5cbi8vYmFuZCB0aGVtZSBjaGFuZ2VyXG5cbmZ1bmN0aW9uIG11c2ljU2VsZWN0KCkge1xuICB2YXIgbmV3UHJvamVjdCA9ICQodGhpcykuYXR0cignZGF0YS1hbHQnKTtcblxuICBmdW5jdGlvbiB0aGVtZUNoYW5nZShwcm9qZWN0LCBjb2xvciwgY29sb3IyKXtcbiAgICAgICQoJy50aGVtZV9jb250cm9sJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xuICAgICAgJCgnLm5hdl9wYXJlbnQnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcjIpO1xuICAgICAgJCgnLm5hdl9kcm9wZG93bicpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yMik7XG4gICAgICAkKCcucmVsYXRlZF9saW5rcycpLmZpbmQoJy5jYXJkJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IyKTtcbiAgICAgICQoJy4nICsgcHJvamVjdCArICdfcGxheWxpc3QnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9O1xuXG4gIGlmIChwcm9qZWN0ICE9PSBuZXdQcm9qZWN0KSB7XG4gICAgcHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgaWYgKHByb2plY3QgPT0gJ2JmdHMnKSB7XG4gICAgICB0aGVtZUNoYW5nZSgnYmZ0cycsICcjOEY5NkE1JywgJyMyNDJCM0InKTtcbiAgICAgICQoJy5mYWNlYm9va19saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYnVpbHRmb3J0aGVzZWEvJyk7XG4gICAgICAkKCcueW91dHViZV9saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDMEVZOE1FdWhITHphVjZWZDlVN2RaZy92aWRlb3MnKTtcbiAgICAgICQoJy5yZWxhdGVkX2xpbmtzJykuZmluZCgnaDEnKS5jc3MoJ2ZvbnQtZmFtaWx5JywgXCJvcmF0b3Itc3RkXCIpO1xuICAgICAgJCgnLmxvZ29fbHInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgJCgnLmxvZ29fYmZ0cycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgJCgnLmxvZ29fdGJtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICQoJy5oZWFkZXJfbG9nbycpLmNzcygnZm9udC1mYW1pbHknLCAnb3JhdG9yLXN0ZCcpO1xuICAgICAgJCgnLmhlYWRlcl9sb2dvJykuZmFkZU91dCgpLmh0bWwoJ0J1aWx0IEZvciBUaGUgU2VhJykuZmFkZUluKCk7XG4gICAgICAkKCcuaGVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgvaW1hZ2VzL2hlYWRlcl8wMS5qcGcpJyk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0ID09ICdscicpIHtcbiAgICAgIHRoZW1lQ2hhbmdlKCdscicsICcjQTlFMUVEJywgJyMyMzhCQTEnKTtcbiAgICAgICQoJy5mYWNlYm9va19saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vTGlhUm9zZU9mZmljaWFsLycpO1xuICAgICAgJCgnLnlvdXR1YmVfbGluaycpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci9saWFyb3Nld2FzdGFrZW4vdmlkZW9zJyk7XG4gICAgICAkKCcucmVsYXRlZF9saW5rcycpLmZpbmQoJ2gxJykuY3NzKCdmb250LWZhbWlseScsIFwidmlrdG9yLXNjcmlwdFwiKTtcbiAgICAgICQoJy5sb2dvX2xyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAkKCcubG9nb19iZnRzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICQoJy5sb2dvX3RibScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAkKCcuaGVhZGVyX2xvZ28nKS5jc3MoJ2ZvbnQtZmFtaWx5JywgJ3Zpa3Rvci1zY3JpcHQnKTtcbiAgICAgICQoJy5oZWFkZXJfbG9nbycpLmZhZGVPdXQoKS5odG1sKCdMaWEgUm9zZScpLmZhZGVJbigpO1xuICAgICAgJCgnLmhlYWRlcicpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoL2ltYWdlcy9oZWFkZXJfMDEuanBnKScpO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdCA9PSAndGJtJykge1xuICAgICAgdGhlbWVDaGFuZ2UoJ3RibScsICcjRURDN0I1JywgJyNBQzZFNTEnKTtcbiAgICAgICQoJy5mYWNlYm9va19saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGhlYnJ1c2hmb290bWlncmF0aW9uLycpO1xuICAgICAgJCgnLnlvdXR1YmVfbGluaycpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1hPMFV4SVRiZEhWbDB5RmZ6aTJzeFEnKTtcbiAgICAgICQoJy5yZWxhdGVkX2xpbmtzJykuZmluZCgnaDEnKS5jc3MoJ2ZvbnQtZmFtaWx5JywgXCJ2ZXJ2ZWluZVwiKTtcbiAgICAgICQoJy5sb2dvX2xyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICQoJy5sb2dvX2JmdHMnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgJCgnLmxvZ29fdGJtJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAkKCcuaGVhZGVyX2xvZ28nKS5jc3MoJ2ZvbnQtZmFtaWx5JywgJ3ZlcnZlaW5lJyk7XG4gICAgICAkKCcuaGVhZGVyX2xvZ28nKS5mYWRlT3V0KCkuaHRtbCgnVGhlIEJydXNoZm9vdCBNaWdyYXRpb24nKS5mYWRlSW4oKVxuICAgICAgJCgnLmhlYWRlcicpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoL2ltYWdlcy9oZWFkZXJfdGJtXzAxLmpwZyknKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gIH1cbn07XG5cbiQoJy5pdGVtJykub24oJ2NsaWNrJywgbXVzaWNTZWxlY3QpO1xuJCgnLnN1Yl9tdXNpYycpLm9uKCdjbGljaycsIG11c2ljU2VsZWN0KTtcbiQoJy5kcm9wZG93bi1pdGVtJykub24oJ2NsaWNrJywgbXVzaWNTZWxlY3QpO1xuJCgnLmJhbmRfc2VsZWN0Jykub24oJ2NsaWNrJywgbXVzaWNTZWxlY3QpO1xuXG5cbi8vU3BvdGlmeSB3aWR0aCBldmVudCB0cmlnZ2Vyc1xuJCh3aW5kb3cpLm9uKCdsb2FkJywgc3BvdFNjYWxlKCkpO1xuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuICBzcG90U2NhbGUoKTtcbn0pO1xuXG5cblxuLy9OYXZpZ2F0aW9uIHNjcm9sbCBvbiBjbGlja1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNjcm9sbERvd24nLCBmdW5jdGlvbihldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKCAkLmF0dHIodGhpcywgJ2hyZWYnKSApLm9mZnNldCgpLnRvcCAtIDUwXG4gICAgfSwgNTAwLCAnc3dpbmcnKTtcbn0pO1xuXG5cblxuXG5cblxuXG4vL21haW4ganF1ZXJ5IGRvYyBjbG9zZVxufSk7XG4iXX0=
