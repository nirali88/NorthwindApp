// require(['app'], function (app) {

//   app.register.directive('uiChart', uiChart);

//   function uiChart() {
//     return {
//       restrict: 'EACM',
//       template: '<div></div>',
//       replace: true,
//       link: function (scope, elem, attrs) {

//         var renderChart = function () {
//           var data = scope.$eval(attrs.uiChart);
//           elem.html('');
//           if (!angular.isArray(data)) {
//             return;
//           }

//           var opts = {};
//           if (!angular.isUndefined(attrs.chartOptions)) {
//             opts = scope.$eval(attrs.chartOptions);
//             if (!angular.isObject(opts)) {
//               throw 'Invalid ui.chart options attribute';
//             }
//           }

//           elem.jqplot(data, opts);
//         };

//         scope.$watch(attrs.uiChart, function () {
//           renderChart();
//         }, true);

//         scope.$watch(attrs.chartOptions, function () {
//           renderChart();
//         });
//       }
//     };
//   }
// });


require(['angular'], function (angular) {

  "use strict";

  var chartAPP = angular.module('ui.chart', []);

  // chartAPP.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$provide', RouteConfig]);

  // function RouteConfig($routeProvider, $controllerProvider, $compileProvider, $provide) {

  //   chartAPP.register = {
  //     controller: $controllerProvider.register,
  //     directive: $compileProvider.directive,
  //     service: $provide.service
  //   };
  // }

  chartAPP
    // .register
    .directive('uiChart', function () {
      return {
        restrict: 'EACM',
        template: '<div></div>',
        replace: true,
        link: function (scope, elem, attrs) {

          var renderChart = function () {
            var data = scope.$eval(attrs.uiChart);
            elem.html('');
            if (!angular.isArray(data)) {
              return;
            }

            var opts = {};
            if (!angular.isUndefined(attrs.chartOptions)) {
              opts = scope.$eval(attrs.chartOptions);
              if (!angular.isObject(opts)) {
                throw 'Invalid ui.chart options attribute';
              }
            }

            elem.jqplot(data, opts);
          };

          scope.$watch(attrs.uiChart, function () {
            renderChart();
          }, true);

          scope.$watch(attrs.chartOptions, function () {
            renderChart();
          });
        }
      };
    });
  return chartAPP;
});

// (function () {
//   "use strict";

//   angular.module('ui.chart', [])
//     .directive('uiChart', function () {
//       return {
//         restrict: 'EACM',
//         template: '<div></div>',
//         replace: true,
//         link: function (scope, elem, attrs) {

//           var renderChart = function () {
//             var data = scope.$eval(attrs.uiChart);
//             elem.html('');
//             if (!angular.isArray(data)) {
//               return;
//             }

//             var opts = {};
//             if (!angular.isUndefined(attrs.chartOptions)) {
//               opts = scope.$eval(attrs.chartOptions);
//               if (!angular.isObject(opts)) {
//                 throw 'Invalid ui.chart options attribute';
//               }
//             }

//             elem.jqplot(data, opts);
//           };

//           scope.$watch(attrs.uiChart, function () {
//             renderChart();
//           }, true);

//           scope.$watch(attrs.chartOptions, function () {
//             renderChart();
//           });
//         }
//       };
//     });
// })();

