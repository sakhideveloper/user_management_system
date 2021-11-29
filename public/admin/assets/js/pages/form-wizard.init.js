/******/ (function() { // webpackBootstrap
/*!************************************************!*\
  !*** ./resources/js/pages/form-wizard.init.js ***!
  \************************************************/
/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Form wizard Js File
*/
$(function () {
  $("#basic-example").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slide",
    onFinished:function (event, currentIndex, priorIndex)
    {
      submit_form(this,event,'submit_step_form');
    }
  });
  $("#vertical-example").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slide",
    stepsOrientation: "vertical"
  });
});
/******/ })()
;