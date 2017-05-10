window.jquery = $ =  require('jquery');
var tether = require('tether')
var bootstrap = require('bootstrap/dist/js/bootstrap');



$(document).ready(function(){

console.log('test1');



//Navigation scroll on click
  $(document).on('click', '.scroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 180
    }, 500, 'swing');
});



//spotify width controller
var project = 'lr'

function spotScale () {
  var width = $('#' + project + '_playlist').find('.card').width() -40;

  $('.' + project + '_spot').css('width', width);
};

$(window).on('load', spotScale());
$(window).resize(function(){
  spotScale();
});
$('.band_select').on('click', function(){
  if (project == $(this).attr('data-alt')) {
    console.log(project);
  } else {
    project = $(this).attr('data-alt');
    return project;
  }
  spotScale();
});



//band theme changer

function musicSelect() {
  var newProject = $(this).attr('data-alt');

  function themeChange(color, color2){
      $('.theme_control').css('background-color', color);
      $('.nav_parent').css('background-color', color2);
      $('.dropdown-content').css('background-color', color2);
  };

  if (project !== newProject) {
    project = newProject;
    if (project == 'bfts') {
      themeChange('#8F96A5', '#242B3B');
    } else if (project == 'lr') {
      themeChange('#A9E1ED', '#238BA1');
    } else if (project == 'tbm') {
      themeChange('#EDC7B5', '#AC6E51');
    }
  } else {
    console.log(project);
  }
};

$('.item').on('click', musicSelect);
$('#band_select').on('click', musicSelect);
$('.sub_music').on('click', musicSelect);



//main jquery doc close
});
