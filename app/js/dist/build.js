(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//window.jquery = $ =  require('jquery');
//var tether = require('tether')
//var bootstrap = require('bootstrap/dist/js/bootstrap');



$(document).ready(function(){

console.log('test1');


//Owl carousel setup
let owlWidth = $(window).width() - 300;
let owlHeight = owlWidth * .563;

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
                items:2,
                videoWidth: owlWidth,
                videoHeight: owlHeight,
            },
            600:{
                items:4,
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
    } else if (project == 'lr') {
      themeChange('lr', '#A9E1ED', '#238BA1');
      $('.facebook_link').attr('href', 'https://www.facebook.com/LiaRoseOfficial/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/user/liarosewastaken/videos');
    } else if (project == 'tbm') {
      themeChange('tbm', '#EDC7B5', '#AC6E51');
      $('.facebook_link').attr('href', 'https://www.facebook.com/thebrushfootmigration/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/channel/UCXO0UxITbdHVl0yFfzi2sxQ');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmsgRHJpdmUgT1NYL1dlYiBEZXZlbG9wbWVudC9MaWEtbXVzaWMtYm9vdHN0cmFwL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Wb2x1bWVzL1dvcmsgRHJpdmUgT1NYL1dlYiBEZXZlbG9wbWVudC9MaWEtbXVzaWMtYm9vdHN0cmFwL2FwcC9qcy9mYWtlXzkzODY2NjJiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vd2luZG93LmpxdWVyeSA9ICQgPSAgcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vL3ZhciB0ZXRoZXIgPSByZXF1aXJlKCd0ZXRoZXInKVxuLy92YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwJyk7XG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5jb25zb2xlLmxvZygndGVzdDEnKTtcblxuXG4vL093bCBjYXJvdXNlbCBzZXR1cFxubGV0IG93bFdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCkgLSAzMDA7XG5sZXQgb3dsSGVpZ2h0ID0gb3dsV2lkdGggKiAuNTYzO1xuXG4kKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczoxLFxuICAgICAgICBuYXY6dHJ1ZSxcbiAgICAgICAgY2VudGVyOnRydWUsXG4gICAgICAgIG1lcmdlOnRydWUsXG4gICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgbWFyZ2luOjEsXG4gICAgICAgIHZpZGVvOnRydWUsXG4gICAgICAgIHZpZGVvV2lkdGg6IDMyMCxcbiAgICAgICAgdmlkZW9IZWlnaHQ6IDE4MCxcbiAgICAgICAgcmVzcG9uc2l2ZTp7XG4gICAgICAgICAgICA0ODA6e1xuICAgICAgICAgICAgICAgIGl0ZW1zOjIsXG4gICAgICAgICAgICAgICAgdmlkZW9XaWR0aDogb3dsV2lkdGgsXG4gICAgICAgICAgICAgICAgdmlkZW9IZWlnaHQ6IG93bEhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6e1xuICAgICAgICAgICAgICAgIGl0ZW1zOjQsXG4gICAgICAgICAgICAgICAgdmlkZW9XaWR0aDogb3dsV2lkdGgsXG4gICAgICAgICAgICAgICAgdmlkZW9IZWlnaHQ6IG93bEhlaWdodCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbi8vc3BvdGlmeSB3aWR0aCBjb250cm9sbGVyXG52YXIgcHJvamVjdCA9ICdscidcblxuZnVuY3Rpb24gc3BvdFNjYWxlICgpIHtcbiAgdmFyIHdpZHRoID0gJCgnI211c2ljJykuZmluZCgnLm5hdicpLndpZHRoKCkgLSA0MDtcblxuICAkKCcubHJfc3BvdCcpLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gICQoJy5iZnRzX3Nwb3QnKS5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICAkKCcudGJtX3Nwb3QnKS5jc3MoJ3dpZHRoJywgd2lkdGgpO1xufTtcblxuXG4vL2JhbmQgdGhlbWUgY2hhbmdlclxuXG5mdW5jdGlvbiBtdXNpY1NlbGVjdCgpIHtcbiAgdmFyIG5ld1Byb2plY3QgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYWx0Jyk7XG5cbiAgZnVuY3Rpb24gdGhlbWVDaGFuZ2UocHJvamVjdCwgY29sb3IsIGNvbG9yMil7XG4gICAgICAkKCcudGhlbWVfY29udHJvbCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcbiAgICAgICQoJy5uYXZfcGFyZW50JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IyKTtcbiAgICAgICQoJy5uYXZfZHJvcGRvd24nKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcjIpO1xuICAgICAgJCgnLnJlbGF0ZWRfbGlua3MnKS5maW5kKCcuY2FyZCcpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yMik7XG4gICAgICAkKCcuJyArIHByb2plY3QgKyAnX3BsYXlsaXN0JykudHJpZ2dlcignY2xpY2snKTtcbiAgfTtcblxuICBpZiAocHJvamVjdCAhPT0gbmV3UHJvamVjdCkge1xuICAgIHByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIGlmIChwcm9qZWN0ID09ICdiZnRzJykge1xuICAgICAgdGhlbWVDaGFuZ2UoJ2JmdHMnLCAnIzhGOTZBNScsICcjMjQyQjNCJyk7XG4gICAgICAkKCcuZmFjZWJvb2tfbGluaycpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2J1aWx0Zm9ydGhlc2VhLycpO1xuICAgICAgJCgnLnlvdXR1YmVfbGluaycpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQzBFWThNRXVoSEx6YVY2VmQ5VTdkWmcvdmlkZW9zJyk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0ID09ICdscicpIHtcbiAgICAgIHRoZW1lQ2hhbmdlKCdscicsICcjQTlFMUVEJywgJyMyMzhCQTEnKTtcbiAgICAgICQoJy5mYWNlYm9va19saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vTGlhUm9zZU9mZmljaWFsLycpO1xuICAgICAgJCgnLnlvdXR1YmVfbGluaycpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vdXNlci9saWFyb3Nld2FzdGFrZW4vdmlkZW9zJyk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0ID09ICd0Ym0nKSB7XG4gICAgICB0aGVtZUNoYW5nZSgndGJtJywgJyNFREM3QjUnLCAnI0FDNkU1MScpO1xuICAgICAgJCgnLmZhY2Vib29rX2xpbmsnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90aGVicnVzaGZvb3RtaWdyYXRpb24vJyk7XG4gICAgICAkKCcueW91dHViZV9saW5rJykuYXR0cignaHJlZicsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDWE8wVXhJVGJkSFZsMHlGZnppMnN4UScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgfVxufTtcblxuJCgnLml0ZW0nKS5vbignY2xpY2snLCBtdXNpY1NlbGVjdCk7XG4kKCcuc3ViX211c2ljJykub24oJ2NsaWNrJywgbXVzaWNTZWxlY3QpO1xuJCgnLmRyb3Bkb3duLWl0ZW0nKS5vbignY2xpY2snLCBtdXNpY1NlbGVjdCk7XG4kKCcuYmFuZF9zZWxlY3QnKS5vbignY2xpY2snLCBtdXNpY1NlbGVjdCk7XG5cblxuLy9TcG90aWZ5IHdpZHRoIGV2ZW50IHRyaWdnZXJzXG4kKHdpbmRvdykub24oJ2xvYWQnLCBzcG90U2NhbGUoKSk7XG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG4gIHNwb3RTY2FsZSgpO1xufSk7XG5cblxuXG4vL05hdmlnYXRpb24gc2Nyb2xsIG9uIGNsaWNrXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2Nyb2xsRG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoICQuYXR0cih0aGlzLCAnaHJlZicpICkub2Zmc2V0KCkudG9wIC0gNTBcbiAgICB9LCA1MDAsICdzd2luZycpO1xufSk7XG5cblxuXG5cblxuXG5cbi8vbWFpbiBqcXVlcnkgZG9jIGNsb3NlXG59KTtcbiJdfQ==
