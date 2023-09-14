$(document).ready(function () {

  ConvertNumberToPersion();
  });
  
  function ConvertNumberToPersion() {
  persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
  function traverse(el) {
  if (el.nodeType == 3) {
  var list = el.data.match(/[0-9]/g);
  if (list != null && list.length != 0) {
   for (var i = 0; i < list.length; i++)
       el.data = el.data.replace(list[i], persian[list[i]]);
  }
  }
  for (var i = 0; i < el.childNodes.length; i++) {
  traverse(el.childNodes[i]);
  }
  }
  traverse(document.body);
  }
  
'use strict';

//Changing price in a toggle pricing block
$('#pricing-toggle').on('click', function () {
  $('.pricing__card').toggleClass('pricing__card--year')
});

//Changing price in common pricing
$(function () {
  
  if (document.getElementById('price')) {
    
    let select = $('#price');
    let arrMonth = ['رایگان', '۹،۰۰۰تومان', '۱۹،۰۰۰تومان', '۳۹،۰۰۰تومان', '۵۹،۰۰۰تومان'];
    let arrYear = ['رایگان', '۱۰۵،۰۰۰تومان', '۲۲۸،۰۰۰تومان', '۴۸۵،۰۰۰تومان', '۵۹۰،۰۰۰تومان'];
    let arrPlans = document.getElementsByClassName('pricing__plan');
    
    //Creating slider
    let slider = $('<div id=\'slider\'></div>').insertAfter(select).slider({
      min: 1,
      max: 5,
      range: 'min',
      value: select[0].selectedIndex + 3,
      slide: function (event, ui) {
        if (ui.value === 1) {
          return false;
        }
        select[0].selectedIndex = ui.value - 1;
        document.getElementById('month').innerHTML = arrMonth[ui.value - 1];
        document.getElementById('year').innerHTML = arrYear[ui.value - 1];
        let arrLi = document.getElementsByClassName('ui-slider-point');
        
        //Remove all price plans, change classes
        for (let i = 0; i < arrPlans.length; i++) {
          $(arrLi[i]).removeClass('active');
          $(arrPlans[i]).addClass('pricing__plan--disable').removeAttr('style');
          $(arrPlans[i]).removeClass('active');
        }
        
        //Show choosing price plan(s)
        for (let i = 0; i < ui.value - 1; i++) {
          $(arrLi[i]).addClass('active');
          $(arrPlans[i + 1]).removeClass('pricing__plan--disable');
        }
        
        //Using for mobile view
        $(arrPlans[ui.value - 1]).css({'visibility': 'visible'});
        $(arrPlans[ui.value - 1]).addClass('active');
      }
    });
    
    $('#price').on('change', function () {
      slider.slider('value', this.selectedIndex + 1);
    }, 300);
    
    $(arrPlans[2]).css({'visibility': 'visible'});
  }
});

$(function () {
  
  //Adding icon to slider button
  let icon = '<div class=\'ui-slider-icon\'><i class=\'mdi mdi-unfold-more-vertical\'></i></div>';
  let el = document.getElementsByClassName('ui-state-default');
  for (let i = 0; i < el.length; i++) {
    el[i].innerHTML = icon;
  }
  
  //Adding color strip (I don't know how it is called)
  let points = '<ul class=\'ui-slider-points\'><li class=\'ui-slider-point active\'></li>' +
    '<li class=\'ui-slider-point active\'></li><li class=\'ui-slider-point\'></li>' +
    '<li></li></ul>';
  let p = document.getElementsByClassName('ui-slider-horizontal');
  for (let i = 0; i < p.length; i++) {
    $(points).insertAfter(p[i]);
  }
});

$(function () {
  let btnPrev = '<span><i class=\'mdi mdi-chevron-left\'></i></span>';
  let btnNext = '<span><i class=\'mdi mdi-chevron-right\'></i></span>';
  
  let elL = document.getElementsByClassName('left');
  let elR = document.getElementsByClassName('right');
  for (let i = 0; i < elL.length; i++) {
    elL[i].innerHTML = btnPrev;
    elR[i].innerHTML = btnNext;
  }
});

$(function () {
  let width = $('.tablesaw-swipe-cellpersist').width() + 24;
  $('.left').css('left', width);
});

$(window).on('resize', function () {
  let width = $('.tablesaw-swipe-cellpersist').width() + 24;
  $('.left').css('left', width);
});

$('.ui-slider-handle').draggable();
