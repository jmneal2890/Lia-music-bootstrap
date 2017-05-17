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
      $('.bandcamp_link').attr('href', 'https://builtforthesea.bandcamp.com/');
      $('.related_links').find('h1').css('font-family', "orator-std");
      $('.logo_lr').css('display', 'none');
      $('.logo_bfts').css('display', 'block');
      $('.logo_tbm').css('display', 'none');
      $('.header_logo').css('font-family', 'orator-std');
      $('.header_logo').fadeOut().html('Built For The Sea').fadeIn();
      $('.header').css('background-image', 'url(/images/header_bfts_01.jpg)');
      $('.bio_lr').css('display', 'none');
      $('.bio_bfts').css('display', 'block');
      $('.bio_tbm').css('display', 'none');
    } else if (project == 'lr') {
      themeChange('lr', '#A9E1ED', '#238BA1');
      $('.facebook_link').attr('href', 'https://www.facebook.com/LiaRoseOfficial/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/user/liarosewastaken/videos');
      $('.bandcamp_link').attr('href', 'https://liarose.bandcamp.com/');
      $('.related_links').find('h1').css('font-family', "viktor-script");
      $('.logo_lr').css('display', 'block');
      $('.logo_bfts').css('display', 'none');
      $('.logo_tbm').css('display', 'none');
      $('.header_logo').css('font-family', 'viktor-script');
      $('.header_logo').fadeOut().html('Lia Rose').fadeIn();
      $('.header').css('background-image', 'url(/images/header_01.jpg)');
      $('.bio_lr').css('display', 'block');
      $('.bio_bfts').css('display', 'none');
      $('.bio_tbm').css('display', 'none');
    } else if (project == 'tbm') {
      themeChange('tbm', '#EDC7B5', '#AC6E51');
      $('.facebook_link').attr('href', 'https://www.facebook.com/thebrushfootmigration/');
      $('.youtube_link').attr('href', 'https://www.youtube.com/channel/UCXO0UxITbdHVl0yFfzi2sxQ');
      $('.bandcamp_link').attr('href', 'https://liarose.bandcamp.com/');
      $('.related_links').find('h1').css('font-family', "verveine");
      $('.logo_lr').css('display', 'none');
      $('.logo_bfts').css('display', 'none');
      $('.logo_tbm').css('display', 'block');
      $('.header_logo').css('font-family', 'verveine');
      $('.header_logo').fadeOut().html('The Brushfoot Migration').fadeIn();
      $('.header').css('background-image', 'url(/images/header_tbm_01.jpg)');
      $('.bio_lr').css('display', 'none');
      $('.bio_bfts').css('display', 'none');
      $('.bio_tbm').css('display', 'block');
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
