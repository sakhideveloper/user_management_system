/******/ (function() { // webpackBootstrap
/*!**********************************************!*\
  !*** ./resources/js/pages/dashboard.init.js ***!
  \**********************************************/
/*
Template Name: Skote - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Dashboard Init Js File
*/
//  subscribe modal
setTimeout(function () {
  $('#subscribeModal').modal('show');
}, 2000); // stacked column chart
var options = {
  chart: {
    height: 360,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Sale',
    data: yearlySale,
  }],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  colors: ['#556ee6', '#f1b44c', '#34c38f'],
  legend: {
    position: 'bottom'
  },
  fill: {
    opacity: 1
  }
};
var chart = new ApexCharts(document.querySelector("#stacked-column-chart"), options);
chart.render(); // Radial chart
var options = {
  chart: {
    height: 200,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '13px',
          color: undefined,
          offsetY: 60
        },
        value: {
          offsetY: 22,
          fontSize: '16px',
          color: undefined,
          formatter: function formatter(val) {
            return val + "%";
          }
        }
      }
    }
  },
  colors: ['#556ee6'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    }
  },
  stroke: {
    dashArray: 4
  },
  series: [appax_value],
  labels: ['Sale Achieve']
};
var chart = new ApexCharts(document.querySelector("#radialBar-chart"), options);
chart.render();
/******/ })()
;